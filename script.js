//items
const menu = [
    {
        id: 1,
        title: 'Five Active Fruit',
        category: 'Fruit',
        price: `2000`,
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608172915/nut_pzmk9b.jpg',
        desc: 'Fruit is Super rich in vitamin that make brain work effectively',
    },
    {
        id: 2,
        title: 'Rice',
        category: 'Rice',
        price: '500',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1608287613/Rice_absbpk.jpg',
        desc: 'Rice is super rich in carbohydrate make the body work effectively',
    },
    {
        id: 3,
        title: 'Rice and Stew',
        category: 'Rice',
        price: '700',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608288354/Rice_and_Stew_m4lefv.jpg',
        desc: 'Rice and Stew is the combination of carbohydrate and vitamin delicious meal',
    },
    {
        id: 4,
        title: 'Rice and Bean',
        category: 'Bean',
        price: '800',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608289066/Rice_and_Bean_v4p9bd.jpg',
        desc: 'Rice and Bean is the combination of Carbohydrate and protein filled with vibes',
    },
    {
        id: 5,
        title: 'Bean',
        category: 'Bean',
        price: '500',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608289564/Bean_oe0ihy.jpg',
        desc: 'Super rich in protein and body building Tissue that keep the body balanced and fit',
    },
    {
        id: 6,
        title: 'Vegetable-Soup and Garri',
        category: 'Soup',
        price: '1000',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608290100/Soup_and_Garri_jccjwz.jpg',
        desc: 'Soup and Garri is the combiination of complete balanced meal',
    },
    {
        id: 7,
        title: 'Edikang Soup and Garri',
        category: 'Soup',
        price: '1000',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608328477/Edikang_Ikong_Soup_f7gnho.jpg',
        desc: 'Soup and Garri is the combiination of complete balanced meal',
    },
    {
        id: 8,
        title: 'Afang Soup and Garri',
        category: 'Soup',
        price: '1000',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608328850/Afang-Soup_a1jw2z.jpg',
        desc: 'Soup and Garri is the combiination of complete balanced meal',
    },
    {
        id: 9,
        title: 'Egusi- okra Soup and Garri',
        category: 'Soup',
        price: '1000',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608329344/Egusi_and_Okra_Soup_r2pcmm.jpg',
        desc: 'Soup and Garri is the combiination of complete balanced meal',
    },
    {
        id: 10,
        title: 'Bean and Spaghetti',
        category: 'Bean',
        price: '800',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608329856/Bean-Spaghetti_bd7vgn.jpg',
        desc: 'Rice and Bean is the combination of Carbohydrate and protein filled with vibes',
    },
    {
        id: 11,
        title: 'Bean and Plaintain',
        category: 'Bean',
        price: '800',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608330184/Bean_and_Plantain_z86iso.jpg',
        desc: 'Rice and Bean is the combination of Carbohydrate and protein filled with vibes',
    },
     {
        id: 12,
        title: 'Rice and Plantain',
        category: 'Rice',
        price: '800',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608330708/Rice_and_plantain_krnhxz.jpg',
        desc: 'Rice and Stew is the combination of carbohydrate and vitamin delicious meal',
    },
      {
        id: 13,
        title: 'Rice and Spaghetti',
        category: 'Rice',
        price: '800',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608330975/Rice_and_Spaghetti_e2dkhj.jpg',
        desc: 'Rice and Stew is the combination of carbohydrate and vitamin delicious meal',
    },
       {
        id: 14,
        title: 'Rice and Bean',
        category: 'Rice',
        price: '800',
        img: 'https://res.cloudinary.com/wisdom-interconnect/image/upload/v1608331352/Rice_and_Bean_2_gbfwmm.jpg',
        desc: 'Rice and Stew is the combination of carbohydrate and vitamin delicious meal',
    },
];
const sectionCenter = document.querySelector('.holder');
const filterBtns = document.querySelectorAll('.filter-btn')
//load item
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu)
})
//filter items
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = (e.currentTarget.dataset.id);
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        
        });
        if (category === 'all') {
            displayMenuItems(menu)
        } else {
            displayMenuItems(menuCategory);
        }
    });
    
  
    
});
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
       // console.log(item);
        return `
      <section class="menu col-md-6 col-sm-12 p-3">
        <article class="menu-item row">
            <img class="bor col-md-1 col-sm-12" src="${item.img}" alt="${item.title}">
            <div class="item-info col-md-5 col-sm-6">
                <header class="d-flex justify-content-between">
               <strong class="mb-0">${item.title}</strong>
                <p class="price align-content-end mb-0"> <span>&#8358;</span>${item.price}</p>
                </header>
                <hr>
                <p class="item-text col-sm-12">
                   ${item.desc}
                </p>
                
            </div>
        </article>
    </section>`
    });
    displayMenu = displayMenu.join('')
    sectionCenter.innerHTML=displayMenu
    console.log(displayMenu);
    
}