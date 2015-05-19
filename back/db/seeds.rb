# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
c1 = Category.new(title:'Personal')
c1.save

c2 = Category.new(title:'Servicios')
c2.save

c3 = Category.new(title:'Academia')
c3.save

t1 = Task.new(title:'Tarea Hack',status:0,date:'2015-05-22',category_id: 3)
t1.save

t2 = Task.new(title:'Buscar Tarjeta de credito',status:0,date:'2015-05-23',category_id: 1)
t2.save

t3 = Task.new(title:'Buscar productos ya pagados',status:0,date:'2015-05-24',category_id: 1)
t3.save

t4 = Task.new(title:'Saldo tlf',status:1,date:'2015-05-15',category_id: 2)
t4.save

t5 = Task.new(title:'Pagar Internet',status:1,date:'2015-05-14',category_id: 2)
t5.save
