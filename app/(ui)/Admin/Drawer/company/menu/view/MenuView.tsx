// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

import { MenuTypes } from 'src/types/apps/menuTypes'

// ** MUI Imports
import Card from '@mui/material/Card'

import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'

import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button'

// ** Third Party Imports
import { useSearchParams } from 'next/navigation'
import { FormControlLabel, Switch } from '@mui/material'

const MenuViewPage = () => {
  const [data, setData] = useState<null | MenuTypes>(null)
  const [resetData, setResetData] = useState<null | MenuTypes>(null)

  const getMenu = useSearchParams()
  useEffect(() => {
    const receivedItem = getMenu.get('menu')

    if (receivedItem) {
      const parsedItem = JSON.parse(receivedItem)
      setData(parsedItem)
      setResetData(parsedItem)
    } else {
      console.error('Error parsing saved menu info:')
    }
  }, [getMenu])

  const updateUser = (field: any, value: string) => {
    const updatedData: any = { ...data }

    updatedData[field] = value

    setData(updatedData)
  }

  const handleFormChange = (field: any, value: any) => {
    updateUser(field, value)
  }

  const handleSave = () => {
    // Here you can send the updated data to the server or perform any other actions
    // For now, just log the updated data
    console.log('Updated Data:', data)
  }

  const [imageUrls, setImageUrls] = useState([data?.mn_image_1 || '', data?.mn_image_2 || '', data?.mn_image_3 || ''])

  // Define a function to handle image uploads for a specific index
  const handleImageUpload = (index: number, file: any) => {
    const newImageUrls = [...imageUrls]

    // Check if a file was selected and update the corresponding URL
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      newImageUrls[index] = imageUrl
    } else {
      newImageUrls[index] = ''
    }

    setImageUrls(newImageUrls)
  }

  return (
    <Grid container spacing={6}>
      {/* Menu Details Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='메뉴 정보' />
          <form>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={18}>
                  <TextField
                    fullWidth
                    label='업체명'
                    placeholder='본사명'
                    value={data?.mn_name || ''}
                    onChange={e => handleFormChange('mn_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='id'
                    placeholder='id'
                    value={data?.idx || ''}
                    onChange={e => handleFormChange('idx', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='판매가'
                    placeholder='판매가'
                    value={data?.mn_price || ''}
                    onChange={e => handleFormChange('mn_price', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label='메뉴 설명'
                    placeholder='메뉴 설명'
                    value={data?.mn_price_description || ''}
                    onChange={e => handleFormChange('mn_price_description', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={18}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label='메뉴명'
                    placeholder='메뉴명'
                    value={data?.mn_description || ''}
                    onChange={e => handleFormChange('mn_description', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={16}>
                  <TextField
                    fullWidth
                    label='알레르기성분 정보'
                    placeholder='알레르기성분 정보'
                    multiline
                    rows={3}
                    value={data?.mn_allergy || ''}
                    onChange={e => handleFormChange('mn_allergy', e.target.value)}
                  />
                </Grid>
                {imageUrls.map((imageUrl, index) => (
                  <Grid item xs={12} sm={4} key={`image_${index}`}>
                    <div
                      style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '5px',
                        backgroundColor: '#C8C8C8',
                        textAlign: 'center'
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`이미지를 추가해 주세요. ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '200px',
                          marginBottom: '5px'
                        }}
                      />
                    </div>

                    <input
                      type='file'
                      id={`mn_image_${index + 1}`}
                      accept='image/*'
                      onChange={(e: null | any) => handleImageUpload(index, e.target.files[0])}
                    />
                  </Grid>
                ))}

                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <FormControlLabel
                    label='판매 여부'
                    control={
                      <Switch
                        checked={data?.mn_is_sell === 1}
                        onChange={e => handleFormChange('mn_is_sell', e.target.checked ? 1 : 0)}
                        name='mn_is_sell'
                        color='primary'
                      />
                    }
                  />

                  <FormControlLabel
                    label='포장 여부'
                    control={
                      <Switch
                        checked={data?.mn_is_takeout === 1}
                        onChange={e => handleFormChange('mn_is_takeout', e.target.checked ? 1 : 0)}
                        name='mn_is_takeout'
                        color='primary'
                      />
                    }
                  />

                  <FormControlLabel
                    label='식사 여부'
                    control={
                      <Switch
                        checked={data?.mn_is_eatin === 1}
                        onChange={e => handleFormChange('mn_is_eatin', e.target.checked ? 1 : 0)}
                        name='mn_is_eatin'
                        color='primary'
                      />
                    }
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start'
                  }}
                >
                  <FormControlLabel
                    label={<span style={{ color: '#9747FF' }}>BESTSELLER</span>}
                    control={
                      <Switch
                        checked={data?.mn_is_best === 1}
                        onChange={e => handleFormChange('mn_is_best', e.target.checked ? 1 : 0)}
                        name='mn_is_best'
                        color='primary'
                      />
                    }
                  />
                  <FormControlLabel
                    label={<span style={{ color: '#28B446' }}>NEW ITEM</span>}
                    control={
                      <Switch
                        checked={data?.mn_is_new === 1}
                        onChange={e => handleFormChange('mn_is_new', e.target.checked ? 1 : 0)}
                        name='mn_is_new'
                        color='primary'
                      />
                    }
                  />
                  <FormControlLabel
                    label='FREE ITEM'
                    control={
                      <Switch
                        checked={data?.mn_is_free === 1}
                        onChange={e => handleFormChange('mn_is_free', e.target.checked ? 1 : 0)}
                        name='mn_is_free'
                        color='primary'
                      />
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button variant='contained' sx={{ mr: 4 }} onClick={handleSave}>
                    저장
                  </Button>
                  <Button type='reset' variant='outlined' color='secondary' onClick={() => setData(resetData)}>
                    취소
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}
MenuViewPage.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default MenuViewPage
