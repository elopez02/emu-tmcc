module.exports = {
  // TOKEN DEL EMU
  // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
  // TOKEN DE PRESENTACION CLIENTE
  token:
    "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w",
  workflow: {
    APPBOOT: "BEN001",
    BEN001: "CCC001",
    CCC001: "BEN001"
  },
  BEN001: {
    status: 1,
    payload: {
      pais: 'CO',
      modulo: 'TMCC',
      canal: '37',
      lenguaje: 'ES'
    }
  },
  CCC001: {
    status: 1,
    payload: {
      valorMaximoCompraCartera: "16500",
      cupoSinCompraCartera: "10000",
      cupoCompraCartera: "20000",
      productos: [
        {
          idProducto: 1,
          seleccionado: true,
          valorCompraCartera: "12000",
          numeroTarjeta: "000512679",
          descProducto: "T. Crédito Mastercard",
          nitEntidad: "",
          nombreEntidad: "BBVA",
          numeroProducto: "",
          saldoActual: "14000",
          tipoProducto: "TCC",
          valorMinimoCompra: "10000",
          valorMaximoCompra: "14000"
        },
        {
          idProducto: 2,
          seleccionado: false,
          valorCompraCartera: "",
          numeroTarjeta: "",
          descProducto: "T. Crédito Visa",
          nitEntidad: "",
          nombreEntidad: "Santander",
          numeroProducto: "",
          saldoActual: "8500",
          tipoProducto: "TCC",
          valorMinimoCompra: "5000",
          valorMaximoCompra: "8500"
        },
        {
          idProducto: 3,
          seleccionado: false,
          valorCompraCartera: "",
          numeroTarjeta: "",
          descProducto: "T. Crédito Mastercard",
          nitEntidad: "",
          nombreEntidad: "Falabella",
          numeroProducto: "",
          saldoActual: "8500",
          tipoProducto: "TCC",
          valorMinimoCompra: "4000",
          valorMaximoCompra: "8500"
        },
        {
          idProducto: 4,
          seleccionado: false,
          valorCompraCartera: "",
          numeroTarjeta: "",
          descProducto: "T. Crédito Mastercard",
          nitEntidad: "",
          nombreEntidad: "Colpatria",
          numeroProducto: "",
          saldoActual: "12000",
          tipoProducto: "TCC",
          valorMinimoCompra: "7000",
          valorMaximoCompra: "12000"
        },
      ]
    }
  },
  // otro: {
  //   "cupoCompraCartera": "16500000",
  //   "cupoTotalTarjeta": "2000000",
  //   "productos": [
  //     {
  //       "descProducto": "TARJETA DE CREDITO Master Card",
  //       "idProducto": 1,
  //       "nitEntidad": "8903002794",
  //       "nombreEntidad": "Banco de Occidente S.A.",
  //       "saldoActual": 1100000,
  //       "tipoProducto": "TDC",
  //       "valorMaximoCompra": 1155000,
  //       "valorMinimoCompra": 1045000
  //     },
  //     {
  //       "descProducto": "TARJETA DE CREDITO Master Card",
  //       "idProducto": 2, 
  //       "nitEntidad": "8903002794",
  //       "nombreEntidad": "Banco de Occidente S.A.",
  //       "saldoActual": 1000000, 
  //       "tipoProducto": "TDC",
  //       "valorMaximoCompra": 1050000,
  //       "valorMinimoCompra": 950000
  //     }]
  // }
}


