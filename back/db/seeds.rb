# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Category.create!([
  {title: "Personal"},
  {title: "Servicios"},
  {title: "Academia"},
  {title: "Viajes"},
  {title: "Otros"}
])

Task.create!([
  {title: "Comprar aceite para el carro", status:0, date: '2015-05-22', category_id: 1},
  {title: "Buscar comida del perro", status:0, date: '2015-05-22', category_id: 1},
  {title: "Hacer mercado", status:0, date: '2015-05-22', category_id: 1},
  {title: "Arreglar laptop", status:0, date: '2015-05-22', category_id: 1},
  {title: "Frances", status:0, date: '2015-05-22', category_id: 2},
  {title: "Griego", status:0, date: '2015-05-22', category_id: 2},
  {title: "Rusos", status:0, date: '2015-05-22', category_id: 2},
  {title: "Hindu", status:0, date: '2015-05-22', category_id: 2},
  {title: "Entregar todoApp", status:0, date: '2015-05-22', category_id: 3},
  {title: "Leer mas sobre jbuilder", status:0, date: '2015-05-22', category_id: 3},
  {title: "Practicar haciendo mas aplicacion en RoR", status:0, date: '2015-05-22', category_id: 3},
  {title: "Pagar el mes", status:0, date: '2015-05-22', category_id: 3},
  {title: "Comprar pasaje", status:0, date: '2015-05-22', category_id: 4},
  {title: "Solicitar visa", status:0, date: '2015-05-22', category_id: 4},
  {title: "Robar a Diosdado dolares", status:0, date: '2015-05-22', category_id: 4},
  {title: "Quedarme en el otro pais", status:0, date: '2015-05-22', category_id: 4},
  {title: "Llamar Hector", status:0, date: '2015-05-22', category_id: 5},
  {title: "Llamar a Romer", status:0, date: '2015-05-22', category_id: 5},
  {title: "Hacerle una broma a Abraham", status:0, date: '2015-05-22', category_id: 5},
  {title: "Comer en AvilaBurguer", status:0, date: '2015-05-22', category_id: 5}
])
