// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import authConfig from 'src/configs/auth'

// ** MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

//eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

//eslint-disable-next-line @typescript-eslint/no-unused-vars
import makeApiCall from 'src/utils/MakeApiCall'
import axios from 'axios'

const HQAddViewPage = () => {
  // ** State
  const [data, setData] = useState<null | any>({
    group_code: '',
    category_code: '',
    brand_code: '',
    si_code: '',
    hq_idx: '',
    si_type: '',
    company_name: '',
    shop_name: '',
    company_owner: '',
    company_business_no: '',
    company_tongsin_no: '',
    company_zip: '',
    company_address_1: '',
    company_address_2: '',
    company_tel: '',
    company_email: '',
    admin_name: '',
    admin_phone: '',
    admin_email: '',
    admin_info_name: '',
    admin_info_email: '',
    branch_name: '',
    branch_address_1: '',
    branch_address_2: '',
    branch_phone: '',
    branch_latiitude: '',
    branch_longitude: '',
    company_area: '',
    company_image_main_1: '',
    company_image_main_2: '',
    company_image_main_3: '',
    company_image_sub_1: '',
    company_image_bestmenu_1: '',
    company_image_bestmenu_2: '',
    company_image_bestmenu_3: ''
  })
  const resetData = {
    group_code: '',
    category_code: '',
    brand_code: '',
    si_code: '',
    hq_idx: '',
    si_type: '',
    company_name: '',
    shop_name: '',
    company_owner: '',
    company_business_no: '',
    company_tongsin_no: '',
    company_zip: '',
    company_address_1: '',
    company_address_2: '',
    company_tel: '',
    company_email: '',
    admin_name: '',
    admin_phone: '',
    admin_email: '',
    admin_info_name: '',
    admin_info_email: '',
    branch_name: '',
    branch_address_1: '',
    branch_address_2: '',
    branch_phone: '',
    branch_latiitude: '',
    branch_longitude: '',
    company_area: '',
    company_image_main_1: '',
    company_image_main_2: '',
    company_image_main_3: '',
    company_image_sub_1: '',
    company_image_bestmenu_1: '',
    company_image_bestmenu_2: '',
    company_image_bestmenu_3: ''
  }

  // image update
  const [imageUrls, setImageUrls] = useState([
    data?.company_image_bestmenu_1 || '',
    data?.company_image_bestmenu_2 || '',
    data?.company_image_bestmenu_3 || ''
  ])
  const [compImageUrls, setCompImageUrls] = useState([
    data?.company_image_main_1 || '',
    data?.company_image_main_2 || '',
    data?.company_image_main_3 || ''
  ])

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

    // Update the data state with the new image URL
    setData((prevData: any) => ({
      ...prevData,
      [`company_image_bestmenu_${index + 1}`]: newImageUrls[index]
    }))
  }

  const handleCompImageUpload = (index: number, file: any) => {
    const newCompImageUrls = [...compImageUrls]

    // Check if a file was selected and update the corresponding URL
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      newCompImageUrls[index] = imageUrl
    } else {
      newCompImageUrls[index] = ''
    }

    setCompImageUrls(newCompImageUrls)

    // Update the data state with the new image URL
    setData((prevData: any) => ({
      ...prevData,
      [`company_image_main_${index + 1}`]: newCompImageUrls[index]
    }))
  }

  // ** Hooks
  const addBranch = (field: any, value: '') => {
    const updatedData: any = { ...data }

    updatedData[field] = value

    setData(updatedData)
  }

  const handleFormChange = (field: any, value: any) => {
    addBranch(field, value)
  }

  const handleSave = () => {
    // Here you can send the updated data to the server or perform any other actions
    // For now, just log the updated data
    console.log('Updated Data:', data)
  }

  let brand
  let group
  let category

  async function fetchDataDB() {
    try {
      const url = `${authConfig.serverEndpoint}${authConfig.defGroupListEndPoint}`
      const url1 = `${authConfig.serverEndpoint}${authConfig.defCategoryListEndPoint}`
      const url2 = `${authConfig.serverEndpoint}${authConfig.defBrandListEndPoint}`

      const response = await axios.get(url)
      const response1 = await axios.get(url1)
      const response2 = await axios.get(url2)

      group = response.data.data
      category = response1.data.data
      brand = response2.data.data
      console.log('====================================')
      console.log(group, brand, category)
      console.log('====================================')
    } catch (error) {
      console.error(error)
    }
  }

  // Ensure that you have authConfig defined with your endpoint configurations.

  // Call the function to fetch the data
  fetchDataDB()

  useEffect(() => {
    fetchDataDB()
  }, [])

  console.log(data)

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='업체(본사) 정보' />
          <form>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='업체명'
                    placeholder='본사명'
                    value={data?.shop_name}
                    onChange={e => handleFormChange('shop_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='상호'
                    placeholder='상호'
                    value={data?.company_name}
                    onChange={e => handleFormChange('company_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='대표자명'
                    placeholder='대표자명'
                    value={data?.company_owner}
                    onChange={e => handleFormChange('company_owner', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='사업자등록번호'
                    placeholder='123-456-7890'
                    value={data?.company_business_no}
                    onChange={e => handleFormChange('company_business_no', e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='회사 구역'
                    placeholder='서울'
                    value={data?.company_area}
                    onChange={e => handleFormChange('company_area', e.target.value)}
                  />
                </Grid>
                <Grid item xs={18} sm={6}>
                  <TextField
                    fullWidth
                    label='소재지'
                    placeholder='서울'
                    value={data?.company_address_1}
                    onChange={e => handleFormChange('company_address_1', e.target.value)}
                  />
                </Grid>
                <Grid item xs={18} sm={6}>
                  <TextField
                    fullWidth
                    label='상세주소'
                    value={data?.company_address_2}
                    placeholder='서울 강남'
                    onChange={e => handleFormChange('company_address_2', e.target.value)}
                  />
                </Grid>
                <Grid item xs={18} sm={6}>
                  <TextField
                    fullWidth
                    label='통신번호'
                    placeholder='11-11-111'
                    value={data?.company_tongsin_no}
                    onChange={e => handleFormChange('company_tongsin_no', e.target.value)}
                  />
                </Grid>
                <Grid item xs={18} sm={6}>
                  <TextField
                    fullWidth
                    label='ZIP'
                    value={data?.company_zip}
                    placeholder={'ZIP'}
                    onChange={e => handleFormChange('company_zip', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='연락처'
                    placeholder='연락처'
                    value={data?.company_tel}
                    onChange={e => handleFormChange('company_tel', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='메일'
                    placeholder='test@test.com'
                    value={data?.company_email}
                    onChange={e => handleFormChange('company_email', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6} alignItems={'center'} display={'flex'} gap={10}>
                  <FormControlLabel
                    label='Branch'
                    labelPlacement='end'
                    control={
                      <Checkbox
                        checked={data.si_type === 'branch'}
                        onChange={() => setData({ ...data, si_type: 'branch' })}
                        name='Branch'
                      />
                    }
                  />
                  <FormControlLabel
                    label='HQ'
                    control={
                      <Checkbox
                        checked={data.si_type === 'hq'}
                        onChange={() => setData({ ...data, si_type: 'hq' })}
                        name='HQ'
                      />
                    }
                  />
                </Grid>

                <Grid item xs={18} sm={18}>
                  <h3>최고의 메뉴 이미지</h3>
                </Grid>
                {imageUrls.map((imageUrl, index) => (
                  <Grid item xs={12} sm={4} key={`image_${index}`}>
                    <div
                      style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '5px',
                        backgroundColor: '#C8C8C8'
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`최고의 메뉴 이미지 ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '200px',
                          marginBottom: '5px'
                        }}
                      />
                    </div>

                    <input
                      type='file'
                      id={`company_image_bestmenu_${index + 1}`}
                      accept='image/*'
                      onChange={(e: any) => handleImageUpload(index, e.target.files[0])}
                    />
                  </Grid>
                ))}
                <Grid item xs={18} sm={18}>
                  <h3>회사 이미지</h3>
                </Grid>
                {compImageUrls.map((imageUrl, index) => (
                  <Grid item xs={12} sm={4} key={`image_${index}`}>
                    <div
                      style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '5px',
                        backgroundColor: '#C8C8C8'
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`회사 이미지 ${index + 1}`}
                        style={{
                          width: '100%',
                          height: '200px',
                          marginBottom: '5px'
                        }}
                      />
                    </div>

                    <input
                      type='file'
                      id={`company_image_main_${index + 1}`}
                      accept='image/*'
                      onChange={(e: any) => handleCompImageUpload(index, e.target.files[0])}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='업체(본사) 정보' />
          <form>
            <CardContent>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='지점 주소 1'
                    placeholder='지점 주소 1을 입력하세요'
                    value={data.branch_address_1}
                    onChange={e => handleFormChange('branch_address_1', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='지점 주소 2'
                    placeholder='지점 주소 2를 입력하세요'
                    value={data.branch_address_2}
                    onChange={e => handleFormChange('branch_address_2', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='지점 위도'
                    placeholder='지점 위도를 입력하세요'
                    value={data.branch_latitude}
                    onChange={e => handleFormChange('branch_latitude', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='지점 경도'
                    placeholder='지점 경도를 입력하세요'
                    value={data.branch_longitude}
                    onChange={e => handleFormChange('branch_longitude', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='지점 이름'
                    placeholder='지점 이름을 입력하세요'
                    value={data.branch_name}
                    onChange={e => handleFormChange('branch_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='지점 전화번호'
                    placeholder='지점 전화번호를 입력하세요'
                    value={data.branch_phone}
                    onChange={e => handleFormChange('branch_phone', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='브랜드 코드'
                    placeholder='브랜드 코드를 입력하세요'
                    value={data.brand_code}
                    onChange={e => handleFormChange('brand_code', e.target.value)}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </form>
        </Card>
      </Grid>
      {/* Memo Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title='당당자 정보' />
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='관리자명'
                  placeholder='관리자명'
                  value={data?.admin_name}
                  onChange={e => handleFormChange('admin_name', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='관리자 이름 정보'
                  placeholder='관리자 이름 정보'
                  value={data?.admin_info_name}
                  onChange={e => handleFormChange('admin_info_name', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label='담당자 휴대폰번호'
                  placeholder='담당자 휴대폰번호'
                  value={data?.admin_phone}
                  onChange={e => handleFormChange('admin_phone', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='담당자 이메일'
                  placeholder='담당자 이메일'
                  value={data?.admin_email}
                  onChange={e => handleFormChange('admin_email', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='관리자 정보 메일'
                  placeholder='관리자 정보 메일'
                  value={data?.admin_info_email}
                  onChange={e => handleFormChange('admin_info_email', e.target.value)}
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
        </Card>
      </Grid>
    </Grid>
  )
}
HQAddViewPage.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default HQAddViewPage
