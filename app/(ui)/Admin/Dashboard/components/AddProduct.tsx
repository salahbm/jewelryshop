'use client'
// ** React Imports
import { useEffect, useState } from 'react'
// ** MUI Imports
import Grid from '@mui/material/Grid'
// ** MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Third Party Imports
import { Autocomplete, FormControlLabel, Switch } from '@mui/material'
import Image from 'next/image'

const AddProduct = () => {
  const [data, setData] = useState<null | any>({
    _id:'',
    title: '',
    description: '',
    description2: '',
    image_1: '',
    image_2: '',
    image_3: '',
    oldPrice: '',
    is_display: 1,
    is_best: 1,
    is_new: 1,
  })
  const [imageUrls, setImageUrls] = useState([data?.image_1 || '', data?.image_2 || '', data?.image_3 || ''])
  const [branches, setBranches] = useState([])
  const resetData = {
    _id:'',
    title: '',
    description: '',
    description2: '',
    image_1: '',
    image_2: '',
    image_3: '',
    oldPrice: '',
    is_display: 1,
    is_best: 1,
    is_new: 1,
  }
  async function fetchDataDB() {
    try {
      const dataBody = {
        name: '',
        page: '1',
        take: 100
      }

      // const url = `${authConfig.serverEndpoint}${authConfig.branchListEndPoint}`
      // const response = await makeApiCall(url, 'post', 1, dataBody)
      // const filteredItems = response?.data.data.filter((item: any) => item.si_type === 'hq')

      // setBranches(filteredItems)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDataDB()
  }, [])

  const updateUser = (field: any, value: '') => {
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

  // Define a function to handle image uploads for a specific index
  const handleImageUpload = (index: number, file: any) => {
    const newImageUrls = [...imageUrls]

    // Check if a file was selected and update the corresponding URL
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      newImageUrls[index] = imageUrl

      // Update the data state with the new image URL
      setData((prevData: any) => ({
        ...prevData,
        [`image_${index + 1}`]: imageUrl // Update the corresponding image property
      }))
    } else {
      newImageUrls[index] = ''
    }

    setImageUrls(newImageUrls)
  }

  return (
    <Grid container spacing={6} sx={{backgroundColor:'inherit'}}>
      {/* Menu Details Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Add New Product' color='success'></CardHeader>
          <form>
            <CardContent>
              <Grid container spacing={5}>
               
                <Grid item xs={12} sm={18}>
                  <TextField
                    fullWidth
                    label='Title'
                    placeholder='Add item title'
                    value={data?.mn_name}
                    onChange={e => handleFormChange('mn_name', e.target.value)}
                  />
                </Grid>
          
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label='Price'
                    placeholder='Old Price'
                    value={data?.mn_price}
                    onChange={e => handleFormChange('mn_price', e.target.value)}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    fullWidth
                    label='Price 2'
                    placeholder='New Price'
                    value={data?.mn_price}
                    onChange={e => handleFormChange('mn_price', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label='Description'
                    placeholder='Add Description for product'
                    value={data?.mn_price_description}
                    onChange={e => handleFormChange('mn_price_description', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={18}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label='How to use'
                    placeholder='Add use case (optional)'
                    value={data?.mn_description}
                    onChange={e => handleFormChange('mn_description', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={16}>
                  <TextField
                    fullWidth
                    label='Notice'
                    placeholder='Add any notice you want to include'
                    multiline
                    rows={3}
                    value={data?.mn_allergy}
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
                      <Image
                        src={imageUrl}
                        alt={`Add Image. ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '200px',
                          marginBottom: '5px'
                        }}
                        width={100}
                        height={200}
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
                  sm={12}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                    
                  }}
                >
            

            <FormControlLabel
                   label={<span style={{ color: 'blue' }}>AVAILABLE</span>}
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
         
                </Grid>
                <Grid item xs={12}>
                  <Button variant='contained' sx={{ mr: 4 }} onClick={handleSave}>
                    Submit
                  </Button>
                  <Button type='reset' variant='outlined' color='secondary' onClick={() => setData(resetData)}>
                    Reset
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

export default AddProduct

