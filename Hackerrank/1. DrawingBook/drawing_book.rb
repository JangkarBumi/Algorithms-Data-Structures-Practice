def page_count(n, p)
  # front
  front = (p / 2).floor

  back = (n / 2).floor - (p / 2).floor

  result = [front, back].min
  result
end
