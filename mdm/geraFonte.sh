#!/bin/bash
cd ..
mkdir backend
mkdir backend/routes
mkdir backend/models
mkdir backend/app
mkdir backend/app/controllers
mkdir frontend/src/app/models
mkdir frontend/src/app/services
mkdir frontend/src/app/component
mkdir frontend/src/app/component/add-coordenada
mkdir frontend/src/app/component/list-coordenada
mkdir frontend/src/app/component/details-coordenada
mkdir frontend/src/app/component/add-categoria
mkdir frontend/src/app/component/list-categoria
mkdir frontend/src/app/component/details-categoria
mkdir frontend/src/app/component/add-endereço
mkdir frontend/src/app/component/list-endereço
mkdir frontend/src/app/component/details-endereço
mkdir frontend/src/app/component/add-estabelecimento
mkdir frontend/src/app/component/list-estabelecimento
mkdir frontend/src/app/component/details-estabelecimento
mkdir frontend/src/app/component/add-estado
mkdir frontend/src/app/component/list-estado
mkdir frontend/src/app/component/details-estado
mkdir frontend/src/app/component/add-municipio
mkdir frontend/src/app/component/list-municipio
mkdir frontend/src/app/component/details-municipio
mkdir frontend/src/app/component/add-busca
mkdir frontend/src/app/component/list-busca
mkdir frontend/src/app/component/details-busca
cd backend/models
mi g app mean index > index.js
cd ..
mi g app mean server > server.js
npm init -y
npm install express mongoose cors --save
cd ..
mi g app angular appModule > frontend/src/app/app.module.ts
mi g app angular appRouting > frontend/src/app/app-routing.module.ts
mi g app angular appComponentHTML > frontend/src/app/app.component.html
mi g app angular appComponentTS > frontend/src/app/app.component.ts
mapperidea generate app mean mongoModel entityName=Coordenada > backend/models/coordenada.model.js
mapperidea generate app mean mongoModel entityName=Categoria > backend/models/categoria.model.js
mapperidea generate app mean mongoModel entityName=Endereço > backend/models/endereço.model.js
mapperidea generate app mean mongoModel entityName=Estabelecimento > backend/models/estabelecimento.model.js
mapperidea generate app mean mongoModel entityName=Estado > backend/models/estado.model.js
mapperidea generate app mean mongoModel entityName=Municipio > backend/models/municipio.model.js
mapperidea generate app mean mongoModel entityName=Busca > backend/models/busca.model.js
mapperidea generate app angular model entityName=Coordenada > frontend/src/app/models/coordenada.model.ts
mapperidea generate app angular model entityName=Categoria > frontend/src/app/models/categoria.model.ts
mapperidea generate app angular model entityName=Endereço > frontend/src/app/models/endereço.model.ts
mapperidea generate app angular model entityName=Estabelecimento > frontend/src/app/models/estabelecimento.model.ts
mapperidea generate app angular model entityName=Estado > frontend/src/app/models/estado.model.ts
mapperidea generate app angular model entityName=Municipio > frontend/src/app/models/municipio.model.ts
mapperidea generate app angular model entityName=Busca > frontend/src/app/models/busca.model.ts
mi g app angular dataService entityName=Coordenada > frontend/src/app/services/coordenada.service.ts
mi g app angular dataService entityName=Categoria > frontend/src/app/services/categoria.service.ts
mi g app angular dataService entityName=Endereço > frontend/src/app/services/endereço.service.ts
mi g app angular dataService entityName=Estabelecimento > frontend/src/app/services/estabelecimento.service.ts
mi g app angular dataService entityName=Estado > frontend/src/app/services/estado.service.ts
mi g app angular dataService entityName=Municipio > frontend/src/app/services/municipio.service.ts
mi g app angular dataService entityName=Busca > frontend/src/app/services/busca.service.ts
mi g app mean routes entityName=Coordenada > backend/routes/coordenada.routes.js
mi g app mean routes entityName=Categoria > backend/routes/categoria.routes.js
mi g app mean routes entityName=Endereço > backend/routes/endereço.routes.js
mi g app mean routes entityName=Estabelecimento > backend/routes/estabelecimento.routes.js
mi g app mean routes entityName=Estado > backend/routes/estado.routes.js
mi g app mean routes entityName=Municipio > backend/routes/municipio.routes.js
mi g app mean routes entityName=Busca > backend/routes/busca.routes.js
mi g app angular addComponentHTML editorName=CoordenadaEditor >  frontend/src/app/component/add-coordenada/add-coordenada.component.html
mi g app angular addComponentTS editorName=CoordenadaEditor >  frontend/src/app/component/add-coordenada/add-coordenada.component.ts
mi g app angular listComponentHTML listName=CoordenadaList >  frontend/src/app/component/list-coordenada/list-coordenada.component.html 
mi g app angular listComponentTS listName=CoordenadaList >  frontend/src/app/component/list-coordenada/list-coordenada.component.html 
mi g app angular detailsComponentHTML editorName=CoordenadaEditor >  frontend/src/app/component/details-coordenada/details-coordenada.component.html
mi g app angular detailsComponentTS editorName=CoordenadaEditor >  frontend/src/app/component/details-coordenada/details-coordenada.component.html
mi g app angular addComponentHTML editorName=CategoriaEditor >  frontend/src/app/component/add-categoria/add-categoria.component.html
mi g app angular addComponentTS editorName=CategoriaEditor >  frontend/src/app/component/add-categoria/add-categoria.component.ts
mi g app angular listComponentHTML listName=CategoriaList >  frontend/src/app/component/list-categoria/list-categoria.component.html 
mi g app angular listComponentTS listName=CategoriaList >  frontend/src/app/component/list-categoria/list-categoria.component.html 
mi g app angular detailsComponentHTML editorName=CategoriaEditor >  frontend/src/app/component/details-categoria/details-categoria.component.html
mi g app angular detailsComponentTS editorName=CategoriaEditor >  frontend/src/app/component/details-categoria/details-categoria.component.html
mi g app angular addComponentHTML editorName=EndereçoEditor >  frontend/src/app/component/add-endereço/add-endereço.component.html
mi g app angular addComponentTS editorName=EndereçoEditor >  frontend/src/app/component/add-endereço/add-endereço.component.ts
mi g app angular listComponentHTML listName=EndereçoList >  frontend/src/app/component/list-endereço/list-endereço.component.html 
mi g app angular listComponentTS listName=EndereçoList >  frontend/src/app/component/list-endereço/list-endereço.component.html 
mi g app angular detailsComponentHTML editorName=EndereçoEditor >  frontend/src/app/component/details-endereço/details-endereço.component.html
mi g app angular detailsComponentTS editorName=EndereçoEditor >  frontend/src/app/component/details-endereço/details-endereço.component.html
mi g app angular addComponentHTML editorName=EstabelecimentoEditor >  frontend/src/app/component/add-estabelecimento/add-estabelecimento.component.html
mi g app angular addComponentTS editorName=EstabelecimentoEditor >  frontend/src/app/component/add-estabelecimento/add-estabelecimento.component.ts
mi g app angular listComponentHTML listName=EstabelecimentoList >  frontend/src/app/component/list-estabelecimento/list-estabelecimento.component.html 
mi g app angular listComponentTS listName=EstabelecimentoList >  frontend/src/app/component/list-estabelecimento/list-estabelecimento.component.html 
mi g app angular detailsComponentHTML editorName=EstabelecimentoEditor >  frontend/src/app/component/details-estabelecimento/details-estabelecimento.component.html
mi g app angular detailsComponentTS editorName=EstabelecimentoEditor >  frontend/src/app/component/details-estabelecimento/details-estabelecimento.component.html
mi g app angular addComponentHTML editorName=EstadoEditor >  frontend/src/app/component/add-estado/add-estado.component.html
mi g app angular addComponentTS editorName=EstadoEditor >  frontend/src/app/component/add-estado/add-estado.component.ts
mi g app angular listComponentHTML listName=EstadoList >  frontend/src/app/component/list-estado/list-estado.component.html 
mi g app angular listComponentTS listName=EstadoList >  frontend/src/app/component/list-estado/list-estado.component.html 
mi g app angular detailsComponentHTML editorName=EstadoEditor >  frontend/src/app/component/details-estado/details-estado.component.html
mi g app angular detailsComponentTS editorName=EstadoEditor >  frontend/src/app/component/details-estado/details-estado.component.html
mi g app angular addComponentHTML editorName=MunicipioEditor >  frontend/src/app/component/add-municipio/add-municipio.component.html
mi g app angular addComponentTS editorName=MunicipioEditor >  frontend/src/app/component/add-municipio/add-municipio.component.ts
mi g app angular listComponentHTML listName=MunicipioList >  frontend/src/app/component/list-municipio/list-municipio.component.html 
mi g app angular listComponentTS listName=MunicipioList >  frontend/src/app/component/list-municipio/list-municipio.component.html 
mi g app angular detailsComponentHTML editorName=MunicipioEditor >  frontend/src/app/component/details-municipio/details-municipio.component.html
mi g app angular detailsComponentTS editorName=MunicipioEditor >  frontend/src/app/component/details-municipio/details-municipio.component.html
mi g app angular addComponentHTML editorName=BuscaEditor >  frontend/src/app/component/add-busca/add-busca.component.html
mi g app angular addComponentTS editorName=BuscaEditor >  frontend/src/app/component/add-busca/add-busca.component.ts
mi g app angular listComponentHTML listName=BuscaList >  frontend/src/app/component/list-busca/list-busca.component.html 
mi g app angular listComponentTS listName=BuscaList >  frontend/src/app/component/list-busca/list-busca.component.html 
mi g app angular detailsComponentHTML editorName=BuscaEditor >  frontend/src/app/component/details-busca/details-busca.component.html
mi g app angular detailsComponentTS editorName=BuscaEditor >  frontend/src/app/component/details-busca/details-busca.component.html
