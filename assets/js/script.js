

// بخص loader
window.onload = function() {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        
    },1000)

};






// بخص sidebar
let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let toggle_sidebar = document.querySelector("#toggle-sidebar");

toggle_sidebar.addEventListener("click", () => {
    let sidebarRight =window.getComputedStyle(sidebar).right;

    if (window.innerWidth > 767) {

        if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
            content.style.marginRight ="0";
        }
        else {
            sidebar.style.right = "0";
            content.style.marginRight ="250px";
        }
        } else {
          if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
          } else {
            sidebar.style.right = "0";
        }
    }
});





// الكود الخاص ب دروب داون الرسائل
let messagescontainer = document.getElementById('messages-container');
let messagesarea = document.getElementById('messages-area');

messagescontainer.addEventListener("click", function() {
   messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block"
});











// تابع لصفحة allproducts 

new DataTable('#allproducts', {
    responsive: true,
	layout: {
		topStart: {
			buttons: [
                {
                    extend: 'copy',
                    text:'نسخ'
                },{
                    extend: 'excel',
                    text:'اكسل'
                },{
                    extend: 'pdf',
                    text:'ملف'
                },{
                    extend: 'print',
                    text:'طباعة'
                }
                ]
		}
	}
});

// تابع لصفحة customars

new DataTable('#customars', {
    responsive: true,
	layout: {
		topStart: {
			buttons: [
                {
                    extend: 'copy',
                    text:'نسخ'
                },{
                    extend: 'excel',
                    text:'اكسل'
                },{
                    extend: 'pdf',
                    text:'ملف'
                },{
                    extend: 'print',
                    text:'طباعة'
                }
                ]
		}
	}
});

// تابع لصفحة orders 

new DataTable('#orders', {
    responsive: true,
	layout: {
		topStart: {
			buttons: [
                {
                    extend: 'copy',
                    text:'نسخ'
                },{
                    extend: 'excel',
                    text:'اكسل'
                },{
                    extend: 'pdf',
                    text:'ملف'
                },{
                    extend: 'print',
                    text:'طباعة'
                }
                ]
		}
	}
});


// blog
new DataTable('#blog-table', {
    responsive: true,
	layout: {
		topStart: {
			buttons: [
                {
                    extend: 'copy',
                    text:'نسخ'
                },{
                    extend: 'excel',
                    text:'اكسل'
                },{
                    extend: 'pdf',
                    text:'ملف'
                },{
                    extend: 'print',
                    text:'طباعة'
                }
                ]
		}
	}
});



// تابع ل select2
$(document).ready(function() {
    $('.js-example-basic-multiple').select2({
        tags:true,
          maximumSelectionLength: 4
    }
     
    );
});







// خاص بمحرر النصوص الموجود الخاص باضافة خبر جديد
ClassicEditor
    .create(document.querySelector('#editor'))
    .catch(error => { console.error(error); });


    











