json.array! @categories do |category|
  json.id category.id
  json.category category.title

  json.tasks category.tasks do |task|
    json.id task.id
    json.title task.title
    json.date task.date
    json.status task.status
    json.category_id task.category_id
  end
end
