json.array! @categories do |category|
  json.id category.id
  json.category category.title
end