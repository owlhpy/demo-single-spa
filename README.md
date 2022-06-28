# demo-single-spa
demo for single-spa with create-react-app and self customize webpack project

## Catalog introduction
### proj-base
basic project for loading sub-project
### proj-child-webpack
customer webpack config with react, react-router, react-router-dom, less
### proj-child1
create by create-react-app, modify with single-spa

## Getting Start
run child project , and then run basic project
```
cd proj-child-webpack
cnpm install
npm start
```
```
cd proj-child1
cnpm install
npm start
```

```
cd proj-base
cnpm install
npm start
```
visit 
http://localhost:9000/proj-child-webpack

visit 
http://localhost:9000/proj1