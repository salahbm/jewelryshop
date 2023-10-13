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
import Switch from '@mui/material/Switch'
import makeApiCall from 'src/utils/MakeApiCall'
import TableHeader from 'src/views/apps/company/menu/list/TableHeader'

interface CellType {
  row: MenuTypes
}
type RowSwitchProps = {
  id: string
  row: MenuTypes
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

const RowOptions = ({ id }: { id: string }) => {
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
  async function deleteMenu(menuID: string) {
    try {
      const url = `${authConfig.serverEndpoint}${authConfig.deleteMenuItemEndPoint}`
      const data = {
        menuID
      }
      const response: any = await makeApiCall(url, 'delete', 1, data)

      if (response) {
        if (response.status === 204) {
          console.log(`menu with ID ${menuID} deleted.`)
        } else {
          console.error(`Error deleting menu with ID ${menuID}.`)
        }
      } else {
        console.error(`No response received when deleting menu with ID ${menuID}.`)
      }
    } catch (error) {
      console.error(error)
    }
  }
  const handleDelete = async (id: string) => {
    await deleteMenu(id)
    handleRowOptionsClose()
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <Tooltip title='보기'>
        <IconButton size='small' component={Link} href={`/apps/company/menu/view/${id}`}>
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
          <Button variant='contained' color='error' onClick={() => handleDelete(id)}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
const RowSwitch: React.FC<RowSwitchProps> = ({ row }) => {
  const [isChecked, setIsChecked] = useState(row?.mn_is_display === 1)

  const handleToggle = () => {
    const newValue = isChecked ? 0 : 1
    setIsChecked(!isChecked)
    row.mn_is_display = newValue
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
        <Switch checked={isChecked} onChange={handleToggle} color={isChecked ? 'primary' : 'secondary'} />
      </Box>
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
    headerName: '메뉴명',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <LinkStyled
              href={{ pathname: `/apps/company/menu/view/${row.idx}`, query: { menu: JSON.stringify(row) } }}
            >{`${row.mn_name}`}</LinkStyled>
          </Box>
        </Box>
      )
    }
  },

  {
    flex: 0.1,
    minWidth: 140,
    field: 'label',
    headerName: '추천 표기',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {`${
                (row.mn_is_best === 1 ? 'Best ' : '') +
                (row.mn_is_new === 1 ? 'New ' : '') +
                (row.mn_is_eatin === 1 ? 'Eating ' : '') +
                (row.mn_is_free === 1 ? 'Free ' : '')
              }`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.25,
    minWidth: 150,
    field: 'allergy',
    headerName: '알레르기 정보',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {row.mn_allergy}
            </Typography>
          </Box>
        </Box>
      )
    }
  },

  {
    flex: 0.25,
    minWidth: 150,
    field: 'img',
    headerName: '이미지',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {`${row.mn_image_1}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: 'price',
    headerName: '판매가',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {`${row.mn_price}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: 'status',
    headerName: '노출설정',
    renderCell: ({ row }: CellType) => <RowSwitch row={row} id={row.id} />
  },
  {
    flex: 0.1,
    minWidth: 90,
    sortable: false,
    field: 'actions',
    headerName: '삭제',
    renderCell: ({ row }: CellType) => <RowOptions id={row.id} />
  }
]

const MenuList = () => {
  // ** State
  const [value, setValue] = useState<string>('')
  const [shopMenu, setShopMenu] = useState<any[]>([])

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [branches, setBranches] = useState<any>([])
  const [selectedOptionFromChild, setSelectedOptionFromChild] = useState<number>()

  const [getFromDates, setGetFromDates] = useState<any>(null)
  const [getToDates, setGetToDates] = useState<any>(null)

  // Use useEffect to load dates from localStorage on component mount
  function renderTime() {
    const storedFromDates = localStorage.getItem('fromDates')
    const storedToDates = localStorage.getItem('toDates')

    setGetFromDates(storedFromDates)
    setGetToDates(storedToDates)
  }

  // Callback function to receive the selected option from the child component
  const handleSelectedOptionChange = (newSelectedOption: number) => {
    setSelectedOptionFromChild(newSelectedOption)
  }

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  // fetch menu list data from database
  async function fetchDataDB() {
    try {
      const dataBranch = {
        name: '',
        page: '1',
        take: 50
      }

      const urlBranch = `${authConfig.serverEndpoint}${authConfig.branchListEndPoint}`
      const responseBranch = await makeApiCall(urlBranch, 'post', 1, dataBranch)
      setBranches(responseBranch?.data.data)
      const dataBody = {
        shop_idx: selectedOptionFromChild || 1,
        page: 1,
        take: paginationModel.pageSize
      }

      const url = `${authConfig.serverEndpoint}${authConfig.shopMenuEndPoint}`
      const response = await makeApiCall(url, 'post', 1, dataBody)
      const rowsWithId = response?.data.data.map((row: MenuTypes, index: number) => ({ ...row, id: `${index}` }))
      setShopMenu(rowsWithId)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDataDB()
  }, [paginationModel, selectedOptionFromChild])

  const handleFilterbyTime = async () => {
    renderTime()
    const fromDate = new Date(getFromDates)
    const toDate = new Date(getToDates)
    console.log(fromDate, toDate)

    if (fromDate && toDate) {
      await fetchDataDB()

      // Filter the data based on the date range
      const filteredData = shopMenu.filter(item => {
        const itemDate = new Date(item.updated_at)
        console.log(itemDate)

        return itemDate >= fromDate && itemDate <= toDate
      })
      setShopMenu(filteredData)
      console.log(filteredData)
    }
  }

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
            branches={branches}
            handleSelectedOptionChange={handleSelectedOptionChange}
          />
          <div style={{ display: 'flex', flexDirection: 'column', width: '100%', paddingInline: 10 }}>
            <Button
              variant='contained'
              onClick={handleFilterbyTime}
              sx={{ marginBlock: 5 }}
              color={getToDates || getFromDates ? 'primary' : 'secondary'}
            >
              검겍
            </Button>
          </div>
          <DataGrid
            autoHeight
            rows={shopMenu}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>

      {/* <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} /> */}
    </Grid>
  )
}
MenuList.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default MenuList
