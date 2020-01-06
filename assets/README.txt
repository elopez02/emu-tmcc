cuando se agrega un archivo se le debe dar nombre de acuerdo a lo siguiente:
`${assets-id}${filtro}.json`

el filtro se estructura de acuerdo a lo siguente:
si tiene aliado
    filtro = `${file}-A${aliado}`
si tiene pais
    file = `${file}-P${pais}`
si tiene modulo
    file = `${file}-M${modulo}`
si tiene canal
    file = `${file}-C${canal}`
si tiene lenguaje
    file = `${file}-L${query.lenguaje}`