// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

import { ShopOrderItemTypes, ShopOrderTypes } from 'src/types/apps/shopOrderTypes'

// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// ** Third Party Imports
import { useSearchParams } from 'next/navigation'
import { Box, Button, Collapse, Typography } from '@mui/material'

const border1 = {
  border: 1,
  borderColor: 'secondary.main',
  p: 2,
  width: '40%',
  margin: '3px',
  borderRadius: '5px'
}

const border2 = {
  border: 1,
  borderColor: 'secondary.main',
  p: 2,
  width: '60%',
  margin: '3px',
  borderRadius: '5px'
}

const ShopOrderViewPage = () => {
  const [data, setData] = useState<ShopOrderTypes | ShopOrderItemTypes | any>([])

  // const [resetData, setResetData] = useState<null | ShopOrderItemTypes>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const getMenu = useSearchParams()
  useEffect(() => {
    const receivedItem = getMenu.get('shopOrder')

    if (receivedItem) {
      const parsedItem = JSON.parse(receivedItem)
      setData(parsedItem)

      // setResetData(parsedItem)
    } else {
      console.error('Error parsing saved shopOrder info:')
    }
  }, [getMenu])
  const GridItem = ({ label, value }: { label: string; value: any }) => {
    return (
      <Grid item xs={12} sm={6} display={'flex'} flexDirection={'row'}>
        <Box sx={border1}>
          <Typography variant='h6' fontWeight={'700'}>
            {label}
          </Typography>
        </Box>
        <Box sx={border2}>
          <Typography variant='h6' color={'secondary'} fontWeight={'600'}>
            {value}
          </Typography>
        </Box>
      </Grid>
    )
  }

  return (
    <Grid container spacing={6} sm={18}>
      <Grid item sm={18}>
        <Card>
          <CardContent>
            <Typography color='primary' variant='h4' fontWeight={'bold'}>
              주문 정보
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={16} position={'relative'}>
        <Collapse in={isExpanded} collapsedSize={250}>
          <Card>
            <form>
              <CardContent>
                <Grid container spacing={5}>
                  <GridItem label='인덱스:' value={data?.idx} />
                  <GridItem label='주문 주소 (지번):' value={data?.od_addr_jibeon} />
                  <GridItem label='현금:' value={data?.od_cash} />
                  <GridItem label='현금 정보:' value={data?.od_cash_info} />
                  <GridItem label='현금 번호:' value={data?.od_cash_no} />
                  <GridItem label='배송 주소 1:' value={data?.od_delivery_address1} />
                  <GridItem label='배송 주소 2:' value={data?.od_delivery_address2} />
                  <GridItem label='배송 이메일:' value={data?.od_delivery_email} />
                  <GridItem label='배송 이름:' value={data?.od_delivery_name} />
                  <GridItem label='배송 휴대폰:' value={data?.od_delivery_phone} />
                  <GridItem label='배송 우편번호 1:' value={data?.od_delivery_zip1} />
                  <GridItem label='이메일:' value={data?.od_email} />
                  <GridItem label='무료 금액:' value={data?.od_free_money} />
                  <GridItem label='송장 번호:' value={data?.od_invoice} />
                  <GridItem label='송장 번호 날짜:' value={data?.od_invoice_at} />
                  <GridItem label='메모:' value={data?.od_memo} />
                  <GridItem label='전화번호:' value={data?.od_phone} />
                  <GridItem label='배송 비용:' value={data?.od_send_cost} />
                  <GridItem label='배송 비용 2:' value={data?.od_send_cost2} />
                  <GridItem label='결제 방식:' value={data?.od_settle_case} />
                  <GridItem label='세금 플래그:' value={data?.od_tax_flag} />
                  <GridItem label='세금 금액:' value={data?.od_tax_money} />
                  <GridItem label='전화번호:' value={data?.od_tel} />
                  <GridItem label='주문 유형:' value={data?.od_type} />
                  <GridItem label='부가세 금액:' value={data?.od_vat_money} />
                  <GridItem label='우편번호 1:' value={data?.od_zip1} />
                </Grid>
              </CardContent>
            </form>
          </Card>
        </Collapse>
        <Button
          variant='contained'
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            position: 'absolute',
            bottom: -30,
            left: '50%',
            transform: 'translateX(-38%)'
          }}
        >
          <Typography variant='body1' fontWeight={'bold'} color={isExpanded ? 'wheat' : 'white'}>
            {isExpanded ? '축소' : '확장'}
          </Typography>
        </Button>
      </Grid>
      <Grid item sm={18}>
        <Card>
          <CardContent>
            <Typography color='primary' variant='h4' fontWeight={'bold'}>
              주문 항목
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {data?.shopCarts &&
        data?.shopCarts.map((cartItem: any, index: number) => (
          <Grid item sm={16} key={index}>
            <Card>
              <form>
                <CardContent>
                  <Grid container spacing={5}>
                    <GridItem label='이름:' value={data?.od_name} />
                    <GridItem label='배송비 유형:' value={cartItem?.it_sc_type} />
                    <GridItem label='직접 주문 여부:' value={cartItem?.ct_direct} />
                    <GridItem label='가격:' value={cartItem?.ct_price} />
                    <GridItem label='수량:' value={cartItem?.ct_qty} />
                    <GridItem label='배송비:' value={cartItem?.ct_send_cost} />
                    <GridItem label='주문 상태:' value={cartItem?.ct_status} />
                    <GridItem label='재고 사용 여부:' value={cartItem?.ct_stock_use} />
                    <GridItem label='인덱스:' value={cartItem?.idx} />
                    <GridItem label='그룹 아이디:' value={cartItem?.ig_id} />
                    <GridItem label='아이템 인덱스:' value={cartItem?.it_idx} />
                    <GridItem label='아이템 이름:' value={cartItem?.it_name} />
                    <GridItem label='배송비 계산 방법:' value={cartItem?.it_sc_method} />
                    <GridItem label='최소 배송비:' value={cartItem?.it_sc_minimum} />
                    <GridItem label='배송비 가격:' value={cartItem?.it_sc_price} />
                    <GridItem label='배송비 수량:' value={cartItem?.it_sc_qty} />
                    <GridItem label='주문 인덱스:' value={cartItem?.od_idx} />
                    <GridItem label='사용자 인덱스:' value={cartItem?.ur_idx} />
                  </Grid>
                </CardContent>
              </form>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}

ShopOrderViewPage.acl = {
  action: 'read',
  subject: 'acl-page'
}
export default ShopOrderViewPage
