// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from 'next/link'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, toggle, value } = props

  return (
    <>
      <Box
        sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <p>본사 리스트</p>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField
            size='small'
            value={value}
            sx={{ mr: 4, mb: 2 }}
            placeholder='검색어를 입력해 주세요'
            onChange={e => handleFilter(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Link href={'./add'}>
          <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
            본사 추가
          </Button>
        </Link>
        <Button
          sx={{ mr: 4, mb: 2 }}
          color='secondary'
          variant='outlined'
          startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
        >
          엑셀 다운로드
        </Button>
      </Box>
    </>
  )
}

export default TableHeader
