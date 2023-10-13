// ** React Imports
import { MouseEvent, useEffect, useState } from 'react'

// ** Next Imports
import { GetStaticProps } from 'next/types'

// ** MUI Imports
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import authConfig from 'src/configs/auth'
import makeApiCall from 'src/utils/MakeApiCall'

// ** Third Party Components
import axios from 'axios'

// ** Types Imports

import { BranchType } from 'src/types/apps/branchTypes'

interface CellType {
  row: BranchType
}
interface Props {
  user: any
  id: string | number
}
const RowOptions = ({ id }: { id: number | string }) => {
  // ** Hooks
  // const dispatch = useDispatch<AppDispatch>()

  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  // close the pop up
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  // delete the user from store
  const handleDelete = () => {
    // dispatch(deleteUser(id))
    handleRowOptionsClose()
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
          <Button variant='contained' color='error' onClick={handleDelete}>
            삭제
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    minWidth: 50,
    field: 'number',
    headerName: '번호',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {`${row.shopInfo.idx}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 80,
    field: 'name',
    headerName: '분기 이름',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {row.shopInfo.si_shop_name}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 180,
    field: 'phone',
    headerName: '전화',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <LinkStyled href={{ pathname: `/apps/user/account/${row.id}`, query: { user: JSON.stringify(row) } }}> */}
          {row.shopInfo.si_branch_phone}
          {/* </LinkStyled> */}
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 180,
    field: 'businessNum',
    headerName: '사업자 번호',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <LinkStyled href={{ pathname: `/apps/user/account/${row.id}`, query: { user: JSON.stringify(row) } }}> */}
          {row.shopInfo.si_company_business_no}
          {/* </LinkStyled> */}
        </Box>
      )
    }
  },

  {
    flex: 0.2,
    minWidth: 120,
    field: 'address',
    headerName: '주소',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {`${row.shopInfo.si_company_address_1}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },

  {
    flex: 0.1,
    minWidth: 70,
    sortable: false,
    field: 'actions',
    headerName: '삭제',
    renderCell: ({ row }: CellType) => <RowOptions id={row.id} />
  }
]

const TabFavorite = ({ user, id }: Props) => {
  // ** State
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [favBranches, setFavBranches] = useState<BranchType[]>([])

  // fetch data from  database
  useEffect(() => {
    async function fetchData() {
      try {
        if (user.idx) {
          const dataBody = {
            member_id: user.idx,
            page: '1',
            take: JSON.stringify(paginationModel.pageSize)
          }

          const url = `${authConfig.serverEndpoint}${authConfig.memFavListEndPoint}`
          const response = await makeApiCall(url, 'post', 1, dataBody)
          const mapShopInfo = response?.data.data.map((row: BranchType, index: number) => ({ ...row, id: `${index}` }))

          setFavBranches(mapShopInfo)
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [user, paginationModel, id])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <p> ■ 즐겨찾는 지점</p>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Divider />

          <DataGrid
            autoHeight
            rows={favBranches}
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

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData = res.data

  return {
    props: {
      apiData
    }
  }
}
TabFavorite.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default TabFavorite
