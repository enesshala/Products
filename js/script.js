// active
$(document).on('click','.box-1,.box-2,.box-3,.box-4',function(){
    $(this).addClass('active').siblings().removeClass('active')
});

//product img active
$(document).on('click','.box-1',function(){
    $('.img1').addClass('active-product').siblings('.img2,.img3,.img4').removeClass('active-product')
});

$(document).on('click','.box-2',function(){
    $('.img2').addClass('active-product').siblings('.img1,.img3,.img4').removeClass('active-product')
});

$(document).on('click','.box-3',function(){
    $('.img3').addClass('active-product').siblings('.img2,.img1,.img4').removeClass('active-product')
});

$(document).on('click','.box-4',function(){
    $('.img4').addClass('active-product').siblings('.img2,.img3,.img1').removeClass('active-product')
});