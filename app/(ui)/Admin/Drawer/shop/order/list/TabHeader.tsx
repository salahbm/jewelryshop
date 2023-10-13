// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { ShopOrderTypes } from 'src/types/apps/shopOrderTypes'
import { useEffect, useState } from 'react'

interface TableHeaderProps {
  value: string
  toggle: () => void
  handleFilter: (val: string) => void
  branches: ShopOrderTypes[]
  handleSelectedOptionChange: any
}
type HeaderBranch = ShopOrderTypes & {
  length: number
  map: (callback: (value: any, index: number, array: any[]) => any) => any[]
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { handleFilter, toggle, value, branches, handleSelectedOptionChange } = props

  // states
  const [selectedOption, setSelectedOption] = useState<HeaderBranch[] | string>('')
  useEffect(() => {
    handleSelectedOptionChange(selectedOption)
  }, [selectedOption])

  return (
    <>
      <Box
        sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <h3>Shop 리스트</h3>
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
            sx={{ mr: 4, mb: 2 }}
            placeholder='검색어를 입력해 주세요'
            onChange={e => handleFilter(e.target.value)}
          />
        </Box>
      </Box>
      <Box
        sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
      >
        <Button sx={{ mb: 2 }} onClick={toggle} variant='contained'>
          주문 추가
        </Button>

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
TableHeader.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default TableHeader
