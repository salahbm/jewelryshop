// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { HqTypes } from 'src/types/apps/hqTypes'
import { useEffect, useState } from 'react'
import CalendarView from './CalendarView'
import Link from 'next/link'

interface TableHeaderProps {
  value: string

  handleFilter: (val: string) => void
  branches: HqTypes[]
  handleSelectedOptionChange: any
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, value, branches, handleSelectedOptionChange } = props

  // states
  const [selectedOption, setSelectedOption] = useState<string>('')
  useEffect(() => {
    handleSelectedOptionChange(selectedOption)
  }, [selectedOption])

  return (
    <>
      <Box
        sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <h3>메뉴 리스트</h3>

        <CalendarView />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
          paddingInline: 5
        }}
      >
        <Link href={'./add'}>
          <Button sx={{ mb: 2 }} variant='contained'>
            메뉴 추가
          </Button>
        </Link>
        <FormControl style={{ minWidth: '400px' }} size='small'>
          <InputLabel>분기 선택</InputLabel>
          <Select value={selectedOption}>
            {branches.map((branch: any) => (
              <MenuItem key={branch.idx} value={branch.idx} onClick={() => setSelectedOption(branch.idx)}>
                {branch.idx} {branch.si_shop_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <TextField
            size='small'
            value={value}
            placeholder='검색어를 입력해 주세요'
            onChange={e => handleFilter(e.target.value)}
          />
        </Box>
        <Button color='secondary' variant='outlined' startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}>
          엑셀 다운로드
        </Button>
      </Box>
    </>
  )
}
TableHeader.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default TableHeader
