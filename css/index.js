let temp = document.getElementById('_input')
        function _add() {
                let _valu = temp.value
                if (_valu.length <= 3) {
                        alert('please add Some Text')
                } else {
                        const _li = document.createElement('li')
                        _li.innerHTML = `<input  type='checkbox'  class ='check my-5' > <h2 class=' w-[80%]'>${_valu}</h2>
                        
                                <i onclick='_edit(this)' class="bi bi-pencil text-[white] text-[20px] ml-3  cursor-pointer hover:text-pink-200 "></i>
                                <i onclick='_clear(this)' class="bi bi-trash text-[white] text-[20px] ml-3  cursor-pointer hover:text-pink-200 "></i>
                        
                        `
                        _li.classList.add('__li')
                        document.getElementById('_list').appendChild(_li)
                        temp.value = null
                        temp.focus()
                }
        }
        function _clear(n) {
                let h = n.parentElement.children
                if (h[0].checked) {
                        n.parentElement.remove()
                } else {
                        alert('Please select one line')
                }
                // document.

        }
        function _clearall(h) {
                let p = document.querySelectorAll('main>div>ul>li')
                p.forEach(element => {
                        element.remove()
                });



        }
        function _edit(n) {
                let j = n.parentElement.children
                j[1].setAttribute("contentEditable", "true");
                j[1].focus();
        }