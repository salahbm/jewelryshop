// ** React Imports
import { useEffect, useState } from "react";

// ** MUI Imports

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// import { styled } from '@mui/material/styles'

import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface Props {
  user: any;
}
const border1 = {
  border: 1,
  borderColor: "secondary.main",
  p: 4,
  width: "30%",
};

const border2 = {
  border: 1,
  borderColor: "secondary.main",
  p: 4,
  width: "70%",
};
interface GridItemProps {
  label: string;
  value: string | null;
}

const GridItem: React.FC<GridItemProps> = ({ label, value }) => (
  <Grid item xs={12} sm={6} display="flex" flexDirection="row">
    <Box sx={border1}>
      <Typography variant="body1">{label}:</Typography>
    </Box>
    <Box sx={border2}>
      <Typography variant="body1">{value}</Typography>
    </Box>
  </Grid>
);
const TabAccount = ({ user }: Props) => {
  // ** State
  useEffect(() => {
    if (user) {
      setFormData(user);
    }
  }, [user]);

  const [formData, setFormData] = useState<any[]>(user);

  return (
    <Grid container spacing={6}>
      {formData ? (
        <Grid item xs={16}>
          <Card>
            <form>
              <CardContent>
                <Grid container spacing={5}>
                  <GridItem label="가입일자" value={formData?.created_at} />
                  <GridItem
                    label="최근 접속일자"
                    value={formData?.jwt_expire_at}
                  />
                  <GridItem label="성함" value={formData?.ur_name} />
                  <GridItem label="아이디" value={formData?.login_id} />
                  <Grid item xs={12} sm={6} display="flex" flexDirection="row">
                    <Box sx={[border1, { width: "15%" }]}>
                      <Typography variant="body1">배송지 정보:</Typography>
                    </Box>
                    <Box sx={[border2, { width: "85%" }]}>
                      <Typography variant="body1">
                        {formData?.ur_addr1}
                      </Typography>
                    </Box>
                  </Grid>
                  <GridItem label="휴대폰번호" value={formData?.ur_phone} />
                  <GridItem
                    label="마케팅 수신동의"
                    value={formData?.ur_email}
                  />
                  <GridItem
                    label="로그인 구분"
                    value={formData?.ur_join_type}
                  />
                  <GridItem label="계정 상태" value={formData?.login_id} />
                </Grid>
              </CardContent>
            </form>
          </Card>
        </Grid>
      ) : (
        <Box
          sx={{
            mt: 6,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CircularProgress sx={{ mb: 4 }} />
          <Typography>Loading...</Typography>
        </Box>
      )}

      {/* Memo Card */}
      <Grid item xs={12}>
        <Card>
          <CardHeader title="메모 정보" />
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={12}>
                <form>
                  <TextField
                    fullWidth
                    label="메모 등록"
                    placeholder={formData?.ur_memo}
                  />
                </form>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" sx={{ mr: 4 }}>
                  등록
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TabAccount;
