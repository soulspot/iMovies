let container = document.querySelector(".container");
let url = "admin.json";
let str = "";
// let loading=document.querySelector("#loading");
//format date
formatDate = (dt) => {
    date = new Date(dt);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();

    if (dt < 10) {
        dt = "0" + dt;
    }
    if (month < 10) {
        month = "0" + month;
    }
    return year + "-" + month + "-" + dt;
};

//Fetch admin information
fetchAdminInformation = async () => {
    let responce = await fetch(url);
    let data = await responce.json();
    console.log(data);
    fetchMovie(data);
};
//fetch movie information
var size;
fetchMovie = async (data) => {
    // loading.classList.remove("none");
    let responce = await fetch(data.movies);
    let movie = await responce.json();
    size=movie.length;
    console.log(size)
    document.querySelector("#movieKey").value=size;
};
fetchAdminInformation();

jQuery('#frmSubmit').on('submit', function (e) {
    e.preventDefault();
   
  
        jQuery('#btnSubmit').attr('disabled', true);
        jQuery.ajax({
            url: 'https://script.google.com/macros/s/AKfycby9bF0KY2YgyajD5IsBkbtAnh8t-uFAe4l4thaPC640P_NI1zDctYJIUi4st-6ZlD4u6A/exec',
            type: 'post',
            data: jQuery('#frmSubmit').serialize(),
            success: function (result) {
               
                jQuery('#frmSubmit')[0].reset();
                jQuery('#btnSubmit').attr('disabled', false);

            }
        });

    // https://script.google.com/macros/s/AKfycby9bF0KY2YgyajD5IsBkbtAnh8t-uFAe4l4thaPC640P_NI1zDctYJIUi4st-6ZlD4u6A/exec
        
    //

    // get link
    //https://script.google.com/macros/s/AKfycbyoXMFQBpWHkP5LIRrMcBN4GrzcMvHkGEWJ116EiZ8n_4dJ9JWuKd3nW9n5f17SwgGp/exec
});