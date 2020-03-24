module.exports = {
    // TOKEN DEL EMU
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjU5MDYwMTEsImV4cCI6MTU5NzQ0MjAxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsImNsaWVuZHRJRCI6IjAxMjM0NTY3ODkiLCJwYXJ0bmVyIjoiTUwiLCJwcm9kdWN0IjoiQ0FNIiwibGVuZ3VhamUiOiJlcy1DUiIsImNhbmFsIjoid2ViIiwicGFpcyI6IkNSIiwibW9kdWxvIjoicXVlPz8_In0.2UplU6K0DBOTsikhlNbNq2IcgvkkoIIG4GEXym1ovKE',
    // TOKEN DE PRESENTACION CLIENTE
    token:
        "eyJhbGciOiJSUzI1NiIsImprdSI6Imh0dHBzOi8vbWJhYXMuZGVzYS5jby5kYXZpdmllbmRhLmNvbS9hdXRoL3YxL2tleXN0b3JlLy53ZWxsLWtub3duL2p3a3MuanNvbiIsImtpZCI6IjE1Njc3MzYzNzAifQ.eyJhdWQiOiJEQVY6Q0xPVUQ6QVVUSCIsImV4cCI6MTU2ODY0OTM5NCwiaWF0IjoxNTY4NjQ4Nzk0LCJpc3MiOiJEQVY6Q0xPVUQ6QVVUSCIsInN1YiI6IjI2NmE1NzEwLWQ4OTktMTFlOS05NjFjLTQ3Nzc2MTFlOTA5NSIsInVzZSI6ImEiLCJwcm9kdWN0IjoiTU5VSU5HX1NWXzQ4IiwianRpIjoiMjkxZWExYTAtZDg5OS0xMWU5LTkzYzktMWQ1OWYzY2Q2OTczIn0.ZkeBZi1bELE7hDRIndfsRlPIPa14Hm_zxxiZ1MkT7EOqspbQucDaUIA594YAmV4f-zHDWqRRzxwrx7CB-2KaxNJaebwLrDlj3cIksnLZGaZ9n9wiQdmHmoZbuFTNhQimBQvKRZCMuemkPYMHrXkIyu967P23gQ-1U5iD-mSX-Teqg37f71nOYDX7H_FNqc8W9SRWfuoT0ZakyoF20DdjaIt8kkI3mCmrC7k5VEFYHDgj-6wDgwAE3vPjvwD2Y2QHPBnGiLnk6Nnu91LnGPweTX908uQG81tgi97uxFzl3jY1ciGf1E4pTEqmhygfZm5jMbxcbF12F0xY9rC-fhiT1w",
    workflow: {
        APPBOOT: "BEN001",
        BEN001: "CONTV001",
        CONTV001: "APPBOOT"
    },
    BEN001: {
        status: 1,
        payload: {
            pais: 'CO',
            modulo: 'TVCC',
            canal: '37',
            lenguaje: 'ES',
            tasaBeneficios: '1.1'
        }
    },
    CONTV001: {
        status: 1,
        payload: {
            tarjetaSeleccionada: {
                id: "",
                numero: "**** 1234",
                cupo: "100",
                franquicia: "VI VISA",
            },
            valorTotalCompraCartera: "1500000",
            cuotaSeleccionada: "300000",
            mesSeleccionado: "6",
            tasaMV: "1.0",
            tasaEA: "15",
            nuevoCupoDisponible: "1000000",
            productos: [
                {
                    numeroTarjeta: "**** 2389",
                    valorCompraCartera: "2100000",
                    nitEntidad: "99999",
                    nombreEntidad: "Banco de Bogotá",
                    franquicia: "Mastercard",
                },
                {
                    numeroTarjeta: "**** 9630",
                    valorCompraCartera: "2496000",
                    nitEntidad: "999999",
                    nombreEntidad: "Caja Social",
                    franquicia: "Diners",
                },
                {
                    numeroTarjeta: "**** 1846",
                    valorCompraCartera: "760000",
                    nitEntidad: "99999",
                    nombreEntidad: "Popular",
                    franquicia: "Mastercard",
                },
                {
                    numeroTarjeta: "**** 0279",
                    valorCompraCartera: "2496000",
                    nitEntidad: "9999999",
                    nombreEntidad: "BBVA",
                    franquicia: "Diners",
                }
            ]
        }
    }
};