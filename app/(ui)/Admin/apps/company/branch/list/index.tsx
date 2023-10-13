// ** React Imports
import { useCallback, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

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

// ** Store Imports
import { useSelector } from 'react-redux'

// ** Utils Import

// ** Actions Imports

// ** Third Party Components

// ** Types Imports
// import { CardStatsType } from 'src/@fake-db/types'
import { RootState } from 'src/store'

// import { BranchType } from 'src/types/apps/branchTypes'

// ** Custom Table Components Imports
import TableHeader from 'src/views/apps/company/branch/list/TableHeader'

// interface UserRoleType {
//   [key: string]: { icon: string; color: string }
// }

interface CellType {
  row: any

  // row: BranchType
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

const RowOptions = ({ id }: { id: number | string }) => {
  // ** Hooks
  // const dispatch = useDispatch<AppDispatch>()

  // ** State
  // const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  // const rowOptionsOpen = Boolean(anchorEl)

  // const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const handleRowOptionsClose = () => {
  //   setAnchorEl(null)
  // }

  const handleDelete = () => {
    // dispatch(deleteUser(id))
    // handleRowOptionsClose()
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Tooltip title='보기'>
        <IconButton size='small' component={Link} href={`/apps/company/branch/view/${id}`}>
          <Icon icon='mdi:eye-outline' fontSize={20} />
        </IconButton>
      </Tooltip>
      <Tooltip title='삭제'>
        <IconButton size='small' onClick={handleDelete}>
          <Icon icon='mdi:delete-outline' fontSize={20} />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

const columns: GridColDef[] = [
  {
    flex: 0.2,
    minWidth: 120,
    field: 'number',
    headerName: '번호',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {`${row.id}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 180,
    field: 'name',
    headerName: '지점명',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinkStyled href={`/apps/company/branch/view/${row.id}`}>{row.name}</LinkStyled>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 140,
    field: 'img',
    headerName: '이미지',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {`${row.img}`}
            </Typography>
          </Box>
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
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {`${row.address}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 180,
    field: 'contact',
    headerName: '연락처',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {`${row.contact}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 100,
    field: 'representative',
    headerName: '담당자',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {row.representative}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 100,
    field: 'createdAt',
    headerName: '등록일자',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {row.createdAt}
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
    headerName: '수정/삭제',
    renderCell: ({ row }: CellType) => <RowOptions id={row.id} />
  }
]

const BranchList = () => {
  // ** State
  // const [role, setRole] = useState<string>('')
  // const [plan, setPlan] = useState<string>('')
  const [value, setValue] = useState<string>('')

  // const [status, setStatus] = useState<string>('')
  const [addBranchOpen, setAddBranchOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  // const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.branch)

  // useEffect(() => {
  //   dispatch(
  //     fetchData({
  //       role,
  //       status,
  //       q: value,
  //       currentPlan: plan
  //     })
  //   )
  // }, [dispatch, plan, role, status, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  // const handleRoleChange = useCallback((e: SelectChangeEvent) => {
  //   setRole(e.target.value)
  // }, [])

  // const handlePlanChange = useCallback((e: SelectChangeEvent) => {
  //   setPlan(e.target.value)
  // }, [])

  // const handleStatusChange = useCallback((e: SelectChangeEvent) => {
  //   setStatus(e.target.value)
  // }, [])

  const toggleAddBranchDrawer = () => setAddBranchOpen(!addBranchOpen)

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <p> 업체 관리 / 지점 리스트</p>
        {/* {apiData && (
          <Grid container spacing={6}>
            {apiData.statsHorizontal.map((item: CardStatsHorizontalProps, index: number) => {
              return (
                <Grid item xs={12} md={3} sm={6} key={index}>
                  <CardStatisticsHorizontal {...item} icon={<Icon icon={item.icon as string} />} />
                </Grid>
              )
            })}
          </Grid>
        )} */}
      </Grid>
      <Grid item xs={12}>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddBranchDrawer} />
          <DataGrid
            autoHeight
            rows={store.data}
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

BranchList.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default BranchList
