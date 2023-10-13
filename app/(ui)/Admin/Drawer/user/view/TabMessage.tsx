import React, { useState } from 'react'

// import MUi
import { Box, Card, Dialog, DialogActions, Divider, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// types
import { DataGrid, GridColDef } from '@mui/x-data-grid'

interface CellType {
  row: {
    id: number
    number: string
    nickname: string
    title: string
    detail: string
    memo: string
    shippingType: string
    detailInfo: string
  }
}

const columns: GridColDef[] = [
  {
    flex: 0.1,
    minWidth: 10,
    field: 'id',
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
    minWidth: 100,
    field: 'number',
    headerName: '발신번호',
    renderCell: ({ row }: CellType) => {
      return <Box sx={{ display: 'flex', alignItems: 'center' }}>{row.number}</Box>
    }
  },
  {
    flex: 0.2,
    minWidth: 120,
    field: 'nickname',
    headerName: '발신닉네임',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {`${row.nickname}`}
            </Typography>
          </Box>
        </Box>
      )
    }
  },

  {
    flex: 0.1,
    minWidth: 80,
    field: 'title',
    headerName: '제목',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {row.title}
            </Typography>
          </Box>
        </Box>
      )
    }
  },

  {
    flex: 0.2,
    minWidth: 100,
    field: 'detail',
    headerName: '내용',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {row.detail}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 80,
    field: 'memo',
    headerName: '메모',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {row.memo}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 50,
    field: 'shippingType',
    headerName: '발송구분',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* {renderClient(row)} */}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography noWrap variant='caption'>
              {row.shippingType}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.2,
    minWidth: 100,
    field: 'detailInfo',
    headerName: '상세내역',
    renderCell: ({ row, handleRowOptionsClick }: any) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Button onClick={(event: any) => handleRowOptionsClick(event, row)}>
              <Typography noWrap variant='caption' style={{ textDecoration: 'underline' }}>
                {row.detailInfo}
              </Typography>
            </Button>
          </Box>
        </Box>
      )
    }
  }
]

const MessageHistory = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const [selectedRow, setSelectedRow] = useState<any | null>(null) // State to track selected row
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const rowOptionsOpen = Boolean(anchorEl)

  const handleRowOptionsClick = (event: React.MouseEvent<HTMLElement>, row: any) => {
    setSelectedRow(row)
    setAnchorEl(event.currentTarget)
  }
  const handleRowOptionsClose = () => {
    setAnchorEl(null)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <Divider />

          <DataGrid
            autoHeight
            rows={fakeFavBranch}
            columns={columns.map(column => ({
              ...column,
              renderCell: (params: any) => {
                const row = params.row as CellType['row']
                if (column.field === 'detailInfo') {
                  return (
                    <Button onClick={event => handleRowOptionsClick(event, row)}>
                      <Typography noWrap variant='caption' style={{ textDecoration: 'underline' }}>
                        {row.detailInfo}
                      </Typography>
                    </Button>
                  )
                }

                // Check if column.renderCell is defined and callable
                if (typeof column.renderCell === 'function') {
                  return column.renderCell(params)
                }

                // Handle the case where column.renderCell is not defined or not callable
                return null // or any other suitable fallback
              }
            }))}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
      {/* {message pop up} */}
      <Dialog open={rowOptionsOpen} onClose={handleRowOptionsClose}>
        <Paper elevation={3} style={{ padding: '18px' }}>
          <Grid container>
            <Grid item xs={12} container>
              <Grid item xs={3} style={border2}>
                <Typography variant='body1' textAlign={'center'}>
                  발신번호
                </Typography>
              </Grid>
              <Grid item xs={9} style={border2}>
                <Typography
                  variant='subtitle1'
                  textAlign={'left'}
                  style={{ verticalAlign: 'center', paddingInline: 10 }}
                >
                  {selectedRow?.number}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} container>
              <Grid item xs={3} style={border2}>
                <Typography variant='body1' textAlign={'center'}>
                  제목
                </Typography>
              </Grid>
              <Grid item xs={9} style={border2}>
                <Typography variant='body1' textAlign={'center'}>
                  {selectedRow?.title}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} container>
              <Grid item xs={3} style={border2}>
                <Typography variant='body1' textAlign={'center'}>
                  내용
                </Typography>
              </Grid>
              <Grid item xs={9} style={border2}>
                <Typography variant='body1' textAlign={'center'}>
                  {selectedRow?.detail}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} container>
              <Grid item xs={3} style={border}>
                <Typography variant='body1' textAlign={'center'}>
                  메모
                </Typography>
              </Grid>
              <Grid item xs={9} style={border}>
                <Typography variant='body1' textAlign={'center'}>
                  {selectedRow?.memo}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <DialogActions style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Button variant='contained' color='primary' onClick={handleRowOptionsClose}>
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}
const TabMessage = ({ user, id }: { user: any | null; id: string | number }) => {
  const [header, setHeader] = useState('')
  const [body, setBody] = useState('')
  const [memo, setMemo] = useState('')
  console.log(id)

  return (
    <Container style={{ minHeight: '500px' }}>
      <Paper elevation={3} style={{ padding: '18px' }}>
        <Grid container>
          <Grid item xs={12} container>
            <Grid item xs={3} style={border2}>
              <Typography variant='body1' textAlign={'center'}>
                발신번호
              </Typography>
            </Grid>
            <Grid item xs={9} style={border2}>
              <Typography variant='subtitle1' textAlign={'left'} style={{ verticalAlign: 'center', paddingInline: 10 }}>
                {user?.phone}
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container>
            <Grid item xs={3} style={border2}>
              <Typography variant='body1' textAlign={'center'}>
                제목
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                label='제목을 입력해주세요.'
                variant='outlined'
                fullWidth
                value={header}
                onChange={e => setHeader(e.target.value)}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} container>
            <Grid item xs={3} style={border2}>
              <Typography variant='body1' textAlign={'center'}>
                내용
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                label='내용을 입력해주세요.'
                variant='outlined'
                fullWidth
                multiline
                rows={8}
                value={body}
                onChange={e => setBody(e.target.value)}
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
              />
            </Grid>
          </Grid>

          <Grid item xs={12} container>
            <Grid item xs={3} style={border}>
              <Typography variant='body1' textAlign={'center'}>
                메모
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                label='내용을 입력해주세요.'
                variant='outlined'
                fullWidth
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
                multiline
                rows={2}
                value={memo}
                onChange={e => setMemo(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <div className='demo-space-x ' style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
        <Button variant='contained' endIcon={<Icon icon='mdi:send' />}>
          Send
        </Button>
      </div>
      <MessageHistory />
    </Container>
  )
}
TabMessage.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default TabMessage
const fakeFavBranch = [
  {
    id: 1,
    number: '010 0000 0000',
    nickname: '경기도 파주시 지목로 137',
    title: 'New Title',
    detail: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing`,
    memo: 'memo info',
    shippingType: 'regular',
    detailInfo: 'detailed info'
  },
  {
    id: 2,
    number: '010 4325 0000',
    nickname: '경기도 파주시 지목로 137',
    title: 'New Title',
    detail: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing`,
    memo: 'memo info',
    shippingType: 'regular',
    detailInfo: 'detailed info'
  },
  {
    id: 3,
    number: '010 6654 0000',
    nickname: '경기도 파주시 지목로 137',
    title: 'New Title',
    detail: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing`,
    memo: 'memo info',
    shippingType: 'regular',
    detailInfo: 'detailed info'
  },
  {
    id: 4,
    number: '010 0000 0000',
    nickname: '경기도 파주시 지목로 137',
    title: 'New Title',
    detail: ` Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing`,
    memo: 'memo info',
    shippingType: 'regular',
    detailInfo: 'detailed info'
  }
]
const border = {
  border: '1px solid gray',
  alignItems: 'center',
  borderRadius: 2
}
const border2 = {
  border: '1px solid gray',
  alignItems: 'center',
  borderRadius: 2,
  borderBottom: 0
}
