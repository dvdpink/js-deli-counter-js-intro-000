function takeANumber (line, name) {
line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing (currentline){
  if(currentline.length >= 1){
    return currentline[0]; currentline.slice(1)
  } else {"There is nobody waiting to be served!"}
}