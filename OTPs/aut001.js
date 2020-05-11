module.exports = {
  // TOKEN DEL EMU
  // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
  // TOKEN DE PRESENTACION CLIENTE
  token:
    'eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w',
  workflow: {
    APPBOOT: 'BEN001',
    BEN001: 'EVA002',
    EVA002: 'AUT001',
    AUT001: 'AUT002',
    AUT002: 'BEN001',
  },
  BEN001: {
    status: 1,
    payload: {
      pais: 'CO',
      modulo: 'TMCC',
      canal: '37',
      lenguaje: 'ES',
      documento: {
        tipo: '1',
        numero: '123456',
      },
    },
  },
  EVA002: {
    status: 1,
    payload: {
      compraCartera: {
        aprobado: true,
        cupoTarjeta: '20000',
        cupoCartera: '18500',
        tasaMV: '1.5',
        tasaEA: '16',
      },
      sinCompraCartera: {
        aprobado: true,
        cupoTarjeta: '12000',
      },
    },
  },
  AUT001: {
    status: 1,
    payload: {
      autorizaciones: {
        firmaPagare: false,
        contratoTarjetaMovil: false,
        compraCartera: false,
        debitarAutomaticamente: false,
      },
      cuentas: [
        {
          nombreProducto: 'Cta. Otro Banco',
          numProducto: '',
          codigoProducto: '001',
          codigoSubProducto: '01',
        },
        {
          nombreProducto: 'Cta. Ahorro',
          numProducto: '3213216513216',
          codigoProducto: '125',
          codigoSubProducto: '12',
        },
        {
          nombreProducto: 'Cta. Corriente',
          numProducto: '3213216511425',
          codigoProducto: '135',
          codigoSubProducto: '13',
        },
        {
          nombreProducto: 'Cta. Ahorro',
          numProducto: '3213216511963',
          codigoProducto: '145',
          codigoSubProducto: '14',
        },
        {
          nombreProducto: 'Cta. Corriente',
          numProducto: '3213216512578',
          codigoProducto: '155',
          codigoSubProducto: '15',
        },
        {
          nombreProducto: 'Cta. Ahorro',
          numProducto: '3213216518899',
          codigoProducto: '165',
          codigoSubProducto: '16',
        },
      ],
    },
  },
  AUT002: {
    status: 1,
    payload: {
      formulario: {
        banco: '',
        tipoCuenta: '',
        numeroCuenta: '',
        correoElectronico: 'solucionesenmaquilas@outlock.com', // requerido
        aliasCuenta: '',
      },
    },
  },
}
