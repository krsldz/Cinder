import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Card.css";
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  text: {
    color: "#67186e;",
  },
});

export default function CardSolo() {
  const classes = useStyles();

  const [image, setImage] = useState('')

 useEffect(() => {
  const movieInfo = (id) => {
    fetch(`https://api.kinopoisk.cloud/movies/${id}/token/dbe6c6c687384869b64e1ea5479766ab`)
    .then(res => res.json()).then(data => setImage(data))
    //const currMovie = response.json()
    //return currMovie
  }
 }, [])
 //console.log(image)

 //movieInfo()
  //1143242
  //https://kinopoisk-ru.clstorage.net/14GOe9250/291b7dDXVYXQ/s9ZG0PvEJK7KeagK3eCbVn7cO9D3UO5Wau3ODjcolXkxxqyvxHZA2RKrZpH3khjdgrgQffGaX2qMQ2mxs8FB8PKDEyHfZJHLLo0IWniV_4cOLFqhg9XaF7vYy-vF25f6E1GOzDb0Qh8Gz2KQIkfNWYOttZmUK4tr-2WNllFVxGATlLegjXS3nIx7GMqs0KogbJ7b16UALnApby2t5HqFmMMTbQ9lFrG_Ba0i1nKnLhkQPxQqFq7KyamHGATzFOZxMgSF4W8F1e_dCLu5XTFZoc-fSNVVkd6TmUxv7GWrVumhMDyNdOdxnJVNk6ehZc3ZEf_EKTXd-XhIRtqWE3UkEtJXxGKdF-Vsnxj4K53BW_Bsfzp2lHIscfpu_n_EyFSbYSM_XQVVoi7l3mHV4rXsO6Kd1BuHnhkqSRb7B6Pnd5OTBjUhPif3vvwoeIqc8DiR7a8I9hey_lBaD6_NxFlWuDJg_t0EFXDPpZ2zVkKXfUpBz-QaBT4ZOGpE-bVDFWYD0zZ24G92Nqz-WXmYbtLYo75-KRblEe2gCJ2sfIcJBRhDQk0-hcRxvMasUxSgN3_aUSzUaNQduAnqNOr2YJfmQFJ0NlNfhNVPLirI-72SibKOTjo0d5DN4MkvzP70Oeb6IhKdXbV2Ur0EvwDl8LRf-gO-16nHHRh7-eQrd6LnReLwpJdjfLVUXv0KqWq9singXQ6oxvVyfVDojjz8Jhq3eaBi_vxHJtLeZs5AhgB0LPpgfEc5hu-ImsjWy4YTROWh0YY1AK5kJh8NGXsLfSL70nyOmfSnQEwx2Dz83pcqtoryQJyPBDZhLOdfccSD9P0YAbxFm7e-G9ia5QvkQAekIeGEpMNNV7SczulY2o6DusK_vXmHlCBfgRnNzB4GajcqE4AtLIcHQt3HH4K1sZWdSfE_dlsm_4hYWodJtkC1FpLAxTWDDgeFb-4aeJjuwUhijz1KhQZhLkJYvs-uR1oV-4ETfw40RsBvJKyBhPIlPQmSTSSIdT266dkWCaaRRSRQksdFYSwGRX-vyataDPAIk4-u6EWn4q2Sic4ePjQYBzhxAByslVdTnRbu4PbyBC4bsZwnaZatGOiYBOu0YMWkMTHVJWFsR9dvv8q66o0w-ZC_POmVNjH_cvg9fa23ONZLMFCtX_TGYj9GPWJ2sHU9KHIONVvlv5pq6ITp9UL3pyDzlAbTDxaEDo5a2ZguAvni3N1bxhUwnoO5DAw81UpWylBjXQ639EMNZU9C54JXTNpQf8R55d1I6hpm-hdy17Qh8Admct8WhK-caClorUJ70D-eu9QUgb5CSHwsT8Wqp3rC8vzOV2bCb1XuImfg5t-aco5Wi6SPKynqpplkg-SH0YGWB5EcJDWf7wgoak2ySjAPPJmW1DCMEzjvPc7mGXW7QZK8X0cG4--FrlKVoacc29GcxHp0rloIuTdp9kFlxuASNQWT7xZ2Pw4JCDj-gNvAXk7LloXSnnDJDG3OJRv1u1GQjM5mxHC9hY7yljOFLyrgLAfph-7729pXWKeyJsTywDSVIN6nZI-dursYbzBK8Kx_GLSmA69DiRxP7ITJZItR831sR-SR3NWfEsZj1YzaUa9l2FffCAkKpxoVUXSUMGB0hqF8dBSsnEtLu0-xmqGPTOs1FfB8AIscbX_GWXVqc_EO7XZWUb6X3ZNmg-TfaRPfVaqUH8kK67bbhBInJ-BDlkRRjDXlnc5aSHlc0YiQDn4KRmYwLlBqbm_8FgrUyPFizF1nRTA_JR5T12PVnTpi7XerJh4pKemlOhaB5zUicbdE46y1Z47dyKoLfXCKQg4t6EVVof5w2qxevpTaFGgSIs6vliVDH5VuoPVRxk37guxFOoRfGtkp9jkFMDcEgpOnFULNhWWdrTpo-64iuuAsLng29dEf4Pot3L4UCKaoEzN8fDamgFzXLlC0ohdv-FDOJYgGPxqZusVpJILlByEw9_VBrZdlv72q-bmsIKug7Mw493dg3aBZTy_-BStGuGERXJ8FJxPvFi8jlPBGHBoDP4Z61vx6qlrVKPQCJzRR8zbVE1wVdp3uCapIvLAoEx7N6iaUA8-Cir2djHT65xqiEM9fxeRgvOb845Ywh73o8o-GmPTtucnI1Ll00VbmUvGUtJN8Nrfs3Hjqi71xuIK-7nq1Z_LOMHgufv40yLToQfJubebHEc5HHEEHs3du26AMNUiGL9ip-tRJ1WPmNFHAxzTBjHf0_MxJuuifkNjBzI055Faw_TEpfY98l7sF2QERPv6FJLIvpNyj1bClzcnxzeXZN93ZyEr2uaaj5JfisoUno2xkhi2OGqr5PbGrcQxNKoUHMf1QaQ4fr7Y5VksBQgz-d3eTL3U_QKbQdP_JIJ8kaZWd23k7BiqkUzcEY-HEdcBeV4Rs7viq2X7Di-IvH_r1ZlANwCkfjFyXGka6MvN8zhblcM0E_NKE09VNS8JcZ3qVzSl56Qb69yKnZfBRBsaRDUWmHm3oiMrdQgrDz1yLFKVCzeIKfs4O57lnKvOQLQ83FWJv964z17HlfKmx3_RqJK246jgW6dWxl1QyEFdU0I5G15_s-7gLbrBoY-6MuNclwHwweMz-jVRZ5yiAYS1_drRhrNasgOeSJkwbII1n2Ffeexi6BOmFEjV0cMIX1MGt99ee_CmrSJ_z2IB8_jhkJWOeEbkuTv51GoSooPFejLR3YE-0j1JEMCWuO8IM1DuFvVg6uAUp1uDlZTLCV8ejXHRkP15pCuuc8hugPk7JlsRAzlAIbT9vhHlXmYNgbt9FJqAt1W2TNZCETzvgHke5JC3Iu6uHCScB91Tic7SlIm-HV9zt60i4nPJ5Um8uerS0o93TmTx93kbqV_jD0Nz_tOShD_c8MfbgJsw5QY8WeQU_Shr7hDkUwuf0cwDF1NNvprYen-tauF7B2PCsXDinlkJ-YOl8XE4GizWYMyBOnwSUYa-XPJK1k2fdy7BsdlvmLkgK0#DSD

  // useEffect(() => {
  //   axios
  //     .get("https://api.kinopoisk.cloud/movies/1143242/token/efcf5da3f88fef737921b0cd9182b8d6")
  //     .then(res => console.log(res.data));
    
  // }, []);
//console.log(image)

  return (
    <div className="card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="fucking card"
            height="100%"
            image="https://kinopoisk-ru.clstorage.net/14GOe9250/291b7dDXVYXQ/s9ZG0PvEJK7KeagK3eCbVn7cO9D3UO5Wau3ODjcolXkxxqyvxHZA2RKrZpH3khjdgrgQffGaX2qMQ2mxs8FB8PKDEyHfZJHLLo0IWniV_4cOLFqhg9XaF7vYy-vF25f6E1GOzDb0Qh8Gz2KQIkfNWYOttZmUK4tr-2WNllFVxGATlLegjXS3nIx7GMqs0KogbJ7b16UALnApby2t5HqFmMMTbQ9lFrG_Ba0i1nKnLhkQPxQqFq7KyamHGATzFOZxMgSF4W8F1e_dCLu5XTFZoc-fSNVVkd6TmUxv7GWrVumhMDyNdOdxnJVNk6ehZc3ZEf_EKTXd-XhIRtqWE3UkEtJXxGKdF-Vsnxj4K53BW_Bsfzp2lHIscfpu_n_EyFSbYSM_XQVVoi7l3mHV4rXsO6Kd1BuHnhkqSRb7B6Pnd5OTBjUhPif3vvwoeIqc8DiR7a8I9hey_lBaD6_NxFlWuDJg_t0EFXDPpZ2zVkKXfUpBz-QaBT4ZOGpE-bVDFWYD0zZ24G92Nqz-WXmYbtLYo75-KRblEe2gCJ2sfIcJBRhDQk0-hcRxvMasUxSgN3_aUSzUaNQduAnqNOr2YJfmQFJ0NlNfhNVPLirI-72SibKOTjo0d5DN4MkvzP70Oeb6IhKdXbV2Ur0EvwDl8LRf-gO-16nHHRh7-eQrd6LnReLwpJdjfLVUXv0KqWq9singXQ6oxvVyfVDojjz8Jhq3eaBi_vxHJtLeZs5AhgB0LPpgfEc5hu-ImsjWy4YTROWh0YY1AK5kJh8NGXsLfSL70nyOmfSnQEwx2Dz83pcqtoryQJyPBDZhLOdfccSD9P0YAbxFm7e-G9ia5QvkQAekIeGEpMNNV7SczulY2o6DusK_vXmHlCBfgRnNzB4GajcqE4AtLIcHQt3HH4K1sZWdSfE_dlsm_4hYWodJtkC1FpLAxTWDDgeFb-4aeJjuwUhijz1KhQZhLkJYvs-uR1oV-4ETfw40RsBvJKyBhPIlPQmSTSSIdT266dkWCaaRRSRQksdFYSwGRX-vyataDPAIk4-u6EWn4q2Sic4ePjQYBzhxAByslVdTnRbu4PbyBC4bsZwnaZatGOiYBOu0YMWkMTHVJWFsR9dvv8q66o0w-ZC_POmVNjH_cvg9fa23ONZLMFCtX_TGYj9GPWJ2sHU9KHIONVvlv5pq6ITp9UL3pyDzlAbTDxaEDo5a2ZguAvni3N1bxhUwnoO5DAw81UpWylBjXQ639EMNZU9C54JXTNpQf8R55d1I6hpm-hdy17Qh8Admct8WhK-caClorUJ70D-eu9QUgb5CSHwsT8Wqp3rC8vzOV2bCb1XuImfg5t-aco5Wi6SPKynqpplkg-SH0YGWB5EcJDWf7wgoak2ySjAPPJmW1DCMEzjvPc7mGXW7QZK8X0cG4--FrlKVoacc29GcxHp0rloIuTdp9kFlxuASNQWT7xZ2Pw4JCDj-gNvAXk7LloXSnnDJDG3OJRv1u1GQjM5mxHC9hY7yljOFLyrgLAfph-7729pXWKeyJsTywDSVIN6nZI-dursYbzBK8Kx_GLSmA69DiRxP7ITJZItR831sR-SR3NWfEsZj1YzaUa9l2FffCAkKpxoVUXSUMGB0hqF8dBSsnEtLu0-xmqGPTOs1FfB8AIscbX_GWXVqc_EO7XZWUb6X3ZNmg-TfaRPfVaqUH8kK67bbhBInJ-BDlkRRjDXlnc5aSHlc0YiQDn4KRmYwLlBqbm_8FgrUyPFizF1nRTA_JR5T12PVnTpi7XerJh4pKemlOhaB5zUicbdE46y1Z47dyKoLfXCKQg4t6EVVof5w2qxevpTaFGgSIs6vliVDH5VuoPVRxk37guxFOoRfGtkp9jkFMDcEgpOnFULNhWWdrTpo-64iuuAsLng29dEf4Pot3L4UCKaoEzN8fDamgFzXLlC0ohdv-FDOJYgGPxqZusVpJILlByEw9_VBrZdlv72q-bmsIKug7Mw493dg3aBZTy_-BStGuGERXJ8FJxPvFi8jlPBGHBoDP4Z61vx6qlrVKPQCJzRR8zbVE1wVdp3uCapIvLAoEx7N6iaUA8-Cir2djHT65xqiEM9fxeRgvOb845Ywh73o8o-GmPTtucnI1Ll00VbmUvGUtJN8Nrfs3Hjqi71xuIK-7nq1Z_LOMHgufv40yLToQfJubebHEc5HHEEHs3du26AMNUiGL9ip-tRJ1WPmNFHAxzTBjHf0_MxJuuifkNjBzI055Faw_TEpfY98l7sF2QERPv6FJLIvpNyj1bClzcnxzeXZN93ZyEr2uaaj5JfisoUno2xkhi2OGqr5PbGrcQxNKoUHMf1QaQ4fr7Y5VksBQgz-d3eTL3U_QKbQdP_JIJ8kaZWd23k7BiqkUzcEY-HEdcBeV4Rs7viq2X7Di-IvH_r1ZlANwCkfjFyXGka6MvN8zhblcM0E_NKE09VNS8JcZ3qVzSl56Qb69yKnZfBRBsaRDUWmHm3oiMrdQgrDz1yLFKVCzeIKfs4O57lnKvOQLQ83FWJv964z17HlfKmx3_RqJK246jgW6dWxl1QyEFdU0I5G15_s-7gLbrBoY-6MuNclwHwweMz-jVRZ5yiAYS1_drRhrNasgOeSJkwbII1n2Ffeexi6BOmFEjV0cMIX1MGt99ee_CmrSJ_z2IB8_jhkJWOeEbkuTv51GoSooPFejLR3YE-0j1JEMCWuO8IM1DuFvVg6uAUp1uDlZTLCV8ejXHRkP15pCuuc8hugPk7JlsRAzlAIbT9vhHlXmYNgbt9FJqAt1W2TNZCETzvgHke5JC3Iu6uHCScB91Tic7SlIm-HV9zt60i4nPJ5Um8uerS0o93TmTx93kbqV_jD0Nz_tOShD_c8MfbgJsw5QY8WeQU_Shr7hDkUwuf0cwDF1NNvprYen-tauF7B2PCsXDinlkJ-YOl8XE4GizWYMyBOnwSUYa-XPJK1k2fdy7BsdlvmLkgK0#DSD"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.text}
              component="h2"
            >
              Еще по одной 
            </Typography>
            <Typography variant="body2" className={classes.text} component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className={classes.text}>
            Трейлер
          </Button>
          <Button size="small" align="rigth" className={classes.text}>
            Комментарии
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
