// ** React Imports
import { MouseEvent, useCallback, useEffect, useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import authConfig from '../../../../../configs/auth'

// ** MUI Imports

import { Box, Card, Grid, IconButton, Tooltip, Typography, Dialog } from '@mui/material'

import { styled } from '@mui/material/styles'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { HqTypes } from 'src/types/apps/hqTypes'

// ** Custom Table Components Imports
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

//import Dialog from '@mui/material/Dialog/Dialog'
import makeApiCall from 'src/utils/MakeApiCall'
import TableHeader from 'src/views/apps/company/hq/list/TableHeader'

interface CellType {
  row: any

  // row: HqTypes
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
  // ** State
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  const handleDelete = async (id: number) => {
    deleteBranch(id)
    handleRowOptionsClose()
  }

  async function deleteBranch(branchId: number) {
    try {
      const url = `${authConfig.serverEndpoint}${authConfig.branchListEndPoint}`
      const data = {
        branchId
      }
      const response: any = await makeApiCall(url, 'delete', 1, data)
      if (response.status === 204) {
        console.log(`Branch with ID ${branchId} deleted.`)
      } else {
        console.error(`Error deleting branch with ID ${branchId}.`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <Tooltip title='보기'>
        <IconButton size='small' component={Link} href={`/apps/user/account/${id}`}>
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

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 70,
    field: 'number',
    headerName: '번호',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
    minWidth: 180,
    field: 'name',
    headerName: '본사명',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinkStyled href={{ pathname: `/apps/company/hq/view/${row.idx}`, query: { branch: JSON.stringify(row) } }}>
            {row.si_company_name}
          </LinkStyled>
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
          <img
            src={`${authConfig.serverEndpoint}/upload/${row?.si_company_image_main_1}`}
            alt={row?.si_company_name}
            loading='lazy'
          />
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
            <Typography noWrap variant='body1'>
              {`${row.si_branch_address_1}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 180,
    field: 'phoneNumber',
    headerName: '연락처',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {`${row.si_admin_phone}`}
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
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {row.si_company_owner}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.3,
    minWidth: 120,
    field: 'email',
    headerName: '이메일',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='body1'>
              {row.si_company_email}
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
    renderCell: ({ row }: CellType) => <RowOptions id={row.idx} />
  }
]

const HqList = () => {
  // ** State
  const [branches, setBranches] = useState<HqTypes[]>([])
  const [value, setValue] = useState<string>('')
  const [addUserOpen, setAddHqOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const toggleAddHqDrawer = () => setAddHqOpen(!addUserOpen)

  // fetch branch list data from database
  async function fetchDataDB() {
    try {
      const dataBody = {
        name: '',
        page: '1',
        take: JSON.stringify(paginationModel.pageSize)
      }

      const url = `${authConfig.serverEndpoint}${authConfig.branchListEndPoint}`
      const response = await makeApiCall(url, 'post', 1, dataBody)
      const rowsWithId = response?.data.data.map((row: HqTypes, index: number) => ({ ...row, id: `${index}` }))
      setBranches(rowsWithId)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDataDB()
  }, [paginationModel])

  return (
    <Grid spacing={10} container>
      <Grid item xs={12}>
        <p> 업체 관리 / 업체 리스트</p>
      </Grid>
      <Grid xs={12} item>
        <Card>
          <TableHeader value={value} handleFilter={handleFilter} toggle={toggleAddHqDrawer} />
          <DataGrid
            autoHeight
            rows={branches}
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

HqList.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default HqList
