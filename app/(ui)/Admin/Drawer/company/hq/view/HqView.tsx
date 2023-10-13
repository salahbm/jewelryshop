// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

import { HqTypes } from 'src/types/apps/hqTypes'

// ** MUI Imports
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'

// ** Third Party Imports

import { useSearchParams } from 'next/navigation'

const HqViewPage = () => {
  // ** State
  const [data, setData] = useState<null | HqTypes>(null)
  const [savedUser, setSavedUser] = useState<null | HqTypes>(null)

  const getUser = useSearchParams()

  useEffect(() => {
    const receivedItem = getUser.get('branch')

    if (receivedItem) {
      try {
        const parsedItem = JSON.parse(receivedItem)
        setData(parsedItem)
        window.localStorage.setItem('user', parsedItem)
        setSavedUser(parsedItem)
      } catch (error) {
        console.error('Error parsing user info:', error)
      }
    }
  }, [getUser])

  // image update
  const [imageUrls, setImageUrls] = useState([
    data?.si_company_image_bestmenu_1 || '',
    data?.si_company_image_bestmenu_2 || '',
    data?.si_company_image_bestmenu_3 || ''
  ])
  const [compImageUrls, setCompImageUrls] = useState([
    data?.si_company_image_main_1 || '',
    data?.si_company_image_main_2 || '',
    data?.si_company_image_main_3 || ''
  ])

  // Define a function to handle image uploads for a specific index
  const handleImageUpload = (index: number, file: any, isCompImage: boolean) => {
    const newImageUrls = [...imageUrls]
    const newCompImageUrls = [...compImageUrls]

    // Check if a file was selected and update the corresponding URL
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      if (isCompImage) {
        newCompImageUrls[index] = imageUrl
      } else {
        newImageUrls[index] = imageUrl
      }
    } else {
      // If no file was selected, clear the image URL
      if (isCompImage) {
        newCompImageUrls[index] = ''
      } else {
        newImageUrls[index] = ''
      }
    }

    // Update the state based on whether it's a company image or not
    if (isCompImage) {
      setCompImageUrls(newCompImageUrls)
    } else {
      setImageUrls(newImageUrls)
    }
  }

  // ** Hooks
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
                    value={data?.si_shop_name || ''}
                    onChange={e => handleFormChange('si_shop_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='상호'
                    placeholder='상호'
                    value={data?.si_company_name || ''}
                    onChange={e => handleFormChange('si_company_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='대표자명'
                    placeholder='대표자명'
                    value={data?.si_company_owner || ''}
                    onChange={e => handleFormChange('si_company_owner', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='사업자등록번호'
                    placeholder='123-456-7890'
                    value={data?.si_company_business_no || ''}
                    onChange={e => handleFormChange('si_company_business_no', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='지점명'
                    placeholder='지점명'
                    value={data?.si_branch_name || ''}
                    onChange={e => handleFormChange('si_branch_name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='회사 구역'
                    placeholder='서울'
                    value={data?.si_company_area || ''}
                    onChange={e => handleFormChange('si_company_area', e.target.value)}
                  />
                </Grid>
                <Grid item xs={18} sm={6}>
                  <TextField
                    fullWidth
                    label='소재지'
                    placeholder='서울'
                    value={data?.si_company_address_1 || ''}
                    onChange={e => handleFormChange('si_company_address_1', e.target.value)}
                  />
                </Grid>
                <Grid item xs={18} sm={6}>
                  <TextField
                    fullWidth
                    label='상세주소'
                    value='서울 강남'
                    placeholder={data?.si_company_address_2 || ''}
                    onChange={e => handleFormChange('si_company_address_2', e.target.value)}
                  />
                </Grid>
                <Grid item xs={18} sm={6}>
                  <TextField
                    fullWidth
                    label='통신번호'
                    placeholder='11-11-111'
                    value={data?.si_company_tongsin_no || ''}
                    onChange={e => handleFormChange('si_company_tongsin_no', e.target.value)}
                  />
                </Grid>
                <Grid item xs={18} sm={6}>
                  <TextField
                    fullWidth
                    label='ZIP'
                    value={data?.si_company_zip || ''}
                    placeholder={'ZIP'}
                    onChange={e => handleFormChange('si_company_zip', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='연락처'
                    placeholder='연락처'
                    value={data?.si_company_tel || ''}
                    onChange={e => handleFormChange('si_company_tel', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label='메일'
                    placeholder='test@test.com'
                    value={data?.si_company_email || ''}
                    onChange={e => handleFormChange('si_company_email', e.target.value)}
                  />
                </Grid>

                <Grid item xs={18} sm={18}>
                  <h3>Best Menu Image</h3>
                </Grid>
                {imageUrls.map((imageUrl, index) => (
                  <Grid item xs={12} sm={4} key={`image_${index}`}>
                    <div
                      style={{
                        width: '200px',
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '5px',
                        backgroundColor: 'gray'
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`Best Menu Image ${index + 1}`}
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
                      onChange={(e: any) => handleImageUpload(index, e.target.files[0], false)}
                    />
                  </Grid>
                ))}
                <Grid item xs={18} sm={18}>
                  <h3>Company Image</h3>
                </Grid>
                {compImageUrls.map((imageUrl, index) => (
                  <Grid item xs={12} sm={4} key={`image_${index}`}>
                    <div
                      style={{
                        width: '200px',
                        height: '200px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '5px',
                        backgroundColor: 'gray'
                      }}
                    >
                      <img
                        src={imageUrl}
                        alt={`Company Image ${index + 1}`}
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
                      onChange={(e: any) => handleImageUpload(index, e.target.files[0], true)}
                    />
                  </Grid>
                ))}
                <Grid item xs={12}>
                  <Button variant='contained' sx={{ mr: 4 }} onClick={handleSave}>
                    저장
                  </Button>
                  <Button type='reset' variant='outlined' color='secondary' onClick={() => setData(savedUser)}>
                    취소
                  </Button>
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
                  value={data?.si_admin_name || ''}
                  onChange={e => handleFormChange('si_admin_name', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='관리자 이름 정보'
                  placeholder='관리자 이름 정보'
                  value={data?.si_admin_info_name || ''}
                  onChange={e => handleFormChange('si_admin_info_name', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label='담당자 휴대폰번호'
                  placeholder='담당자 휴대폰번호'
                  value={data?.si_admin_phone || ''}
                  onChange={e => handleFormChange('si_admin_phone', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='담당자 이메일'
                  placeholder='담당자 이메일'
                  value={data?.si_admin_info_email || ''}
                  onChange={e => handleFormChange('si_admin_email', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='관리자 정보 메일'
                  placeholder='관리자 정보 메일'
                  value={data?.si_admin_info_email || ''}
                  onChange={e => handleFormChange('si_admin_info_email', e.target.value)}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
HqViewPage.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default HqViewPage
