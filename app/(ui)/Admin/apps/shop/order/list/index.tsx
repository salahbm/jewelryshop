// ** React Imports
import { MouseEvent, useCallback, useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import authConfig from 'src/configs/auth'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { MenuTypes } from 'src/types/apps/menuTypes'

// ** Custom Table Components Imports
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { ShopOrderTypes } from 'src/types/apps/shopOrderTypes'
import makeApiCall from 'src/utils/MakeApiCall'
import TableHeader from 'src/views/apps/shop/order/list/TabHeader'

interface CellType {
  row: ShopOrderTypes
}

const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

const RowOptions = ({ id }: { id: number }) => {
  // ** Hooks
  // const dispatch = useDispatch<AppDispatch>()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }
  async function deleteMenu(menuID: number) {
    try {
      const url = `${authConfig.serverEndpoint}${authConfig.deleteMenuItemEndPoint.replace('{idx}', menuID.toString())}`
      const data = {
        menuID
      }
      const response: any = await makeApiCall(url, 'delete', 1, data)

      if (response) {
        if (response.status === 204) {
          console.log(`Branch with ID ${menuID} deleted.`)
        } else {
          const errorMessage = response.data && response.data.error
          if (errorMessage) {
            console.error(`Error deleting branch with ID ${menuID}: ${errorMessage}`)
          } else {
            console.error(`Error deleting branch with ID ${menuID}.`)
          }
        }
      } else {
        console.error(`No response received when deleting branch with ID ${menuID}.`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (id: number) => {
    await deleteMenu(id)
    handleRowOptionsClose()
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <Tooltip title='보기'>
        <IconButton size='small' component={Link} href={`/apps/company/branches/view/${id}`}>
          <Icon icon='mdi:eye-outline' fontSize={20} />
        </IconButton>
      </Tooltip> */}
      <Tooltip title='삭제'>
        <IconButton size='small' onClick={handleRowOptionsClick}>
          <Icon icon='mdi:delete-outline' fontSize={20} />
        </IconButton>
      </Tooltip>
      <Dialog open={rowOptionsOpen} onClose={handleRowOptionsClose}>
        <DialogTitle>회원 아이디 삭제</DialogTitle>
        <DialogContent>
          <DialogContentText>말똥보단소똥 {id}님의 아이디를 삭제 하시겠습니까?</DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button variant='contained' color='primary' onClick={handleRowOptionsClose}>
            취소
          </Button>
          <Button variant='contained' color='error' disabled={true} onClick={() => handleDelete(id)}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 80,
    field: 'number',
    headerName: '번호',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {`${row.idx}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 170,
    field: 'menuName',
    headerName: '주문명',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <LinkStyled
              href={{ pathname: `/apps/shop/order/view/${row.idx}`, query: { shopOrder: JSON.stringify(row) } }}
            >{`${row.od_name}`}</LinkStyled>
          </Box>
        </Box>
      )
    }
  },

  {
    flex: 0.1,
    minWidth: 140,
    field: '주문전화번호',
    headerName: '주문전화번호',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {row?.od_phone}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: '배송지',
    headerName: '배송지',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {row.od_delivery_address1}
            </Typography>
          </Box>
        </Box>
      )
    }
  },

  {
    flex: 0.2,
    minWidth: 100,
    field: '납품명',
    headerName: '납품명',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {`${row.od_delivery_name}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: '주문송신비',
    headerName: '주문송신비',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {`${row.od_send_cost}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: '배달 전화',
    headerName: '배달 전화',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {`${row.od_delivery_phone}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: 'actions',
    headerName: '삭제',
    renderCell: ({ row }: any) => <RowOptions id={row.id} />
  }
]

const ShopOrderList = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [shopOrder, setShopOrder] = useState<any[]>([])
  const [addMenuOpen, setAddMenuOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [branch, setBranch] = useState<ShopOrderTypes[]>([])
  const [selectedOptionFromChild, setSelectedOptionFromChild] = useState<number>()

  // Callback function to receive the selected option from the child component
  const handleSelectedOptionChange = (newSelectedOption: number) => {
    setSelectedOptionFromChild(newSelectedOption)
  }

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddMenuDrawer = () => setAddMenuOpen(!addMenuOpen)

  // fetch branches list data from database
  async function fetchDataDB() {
    try {
      const dataBranch = {
        name: '',
        page: '1',
        take: 50
      }

      const urlBranch = `${authConfig.serverEndpoint}${authConfig.branchListEndPoint}`
      const responseBranch = await makeApiCall(urlBranch, 'post', 1, dataBranch)
      const reversedBranch = responseBranch?.data.data.reverse()
      setBranch(reversedBranch)
      const dataBody = {
        shop_id: selectedOptionFromChild || 1,
        page: 1,
        take: paginationModel.pageSize
      }
      if (selectedOptionFromChild) {
        const url = `${authConfig.serverEndpoint}${authConfig.shopOrderListEndPoint}`
        const response = await makeApiCall(url, 'post', 1, dataBody)
        const rowsWithId = response?.data.data.map((row: MenuTypes, index: number) => ({ ...row, id: `${index}` }))
        const reversedOrder = rowsWithId.reverse()
        setShopOrder(reversedOrder)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDataDB()
  }, [paginationModel, selectedOptionFromChild])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <p> 업체 관리 / 메뉴 리스트</p>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader
            value={value}
            handleFilter={handleFilter}
            toggle={toggleAddMenuDrawer}
            branches={branch}
            handleSelectedOptionChange={handleSelectedOptionChange}
          />
          <DataGrid
            autoHeight
            rows={shopOrder}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
    </Grid>
  )
}
ShopOrderList.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default ShopOrderList
