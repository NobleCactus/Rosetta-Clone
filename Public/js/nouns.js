
var imgs = ['url'+'('+"'"+'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg'+"'"+')', 
				'url'+'('+"'"+'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SGI-2016-South_Georgia_%28Fortuna_Bay%29%E2%80%93King_penguin_%28Aptenodytes_patagonicus%29_04.jpg/1200px-SGI-2016-South_Georgia_%28Fortuna_Bay%29%E2%80%93King_penguin_%28Aptenodytes_patagonicus%29_04.jpg'+"'"+')',
				'url'+'('+"'"+'https://5.imimg.com/data5/BL/BJ/MY-13659451/poultry-live-chicken-500x500.jpg'+"'"+')',
				'url'+'('+"'"+'https://cdn.mos.cms.futurecdn.net/4GyHT6Ye9u3qLXj9d4QKp9-1200-80.jpg'+"'"+')',
				'url'+'('+"'"+'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg'+"'"+')',
				'url'+'('+"'"+'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png'+"'"+')',
				'url'+'('+"'"+'https://www.lgssales.com/wp-content/uploads/2017/07/darling-oranges-1.png'+"'"+')',
				'url'+'('+"'"+'https://static1.cargurus.com/gfx/reskin/bodystyle/2x/hatchback-transparent.png?io=true&format=jpg&auto=webp'+"'"+')',
				'url'+'('+"'"+'https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg'+"'"+')',
				'url'+'('+"'"+'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_S9iXdpv3Zqwax2bopHJ_63YzZkYfgnHl5Q&usqp=CAU'+"'"+')',

				'url'+'('+"'"+'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1500,h_1000/https://www.cicis.com/wp-content/uploads/2019/04/pizza_categoryheader.png'+"'"+')',
				'url'+'('+"'"+'https://images.crateandbarrel.com/is/image/Crate/BasqueSdChairHoneySHS15_1x1/?$web_zoom$&190411134820&wid=450&hei=450'+"'"+')',
				'url'+'('+"'"+'https://c.s-microsoft.com/en-us/CMSImages/1920_Panel1_Hero_Desktop.jpg?version=e7d0925b-ff2a-6710-645d-8b37f62d4b29'+"'"+')',
				'url'+'('+"'"+'https://cdn-images.article.com/products/SKU25A/2890x1500/image48829.jpg?fit=max&w=1920&q=50'+"'"+')',
				'url'+'('+"'"+'https://cdn2.vectorstock.com/i/1000x1000/10/86/realistic-paraffin-burning-candle-vector-21271086.jpg'+"'"+')',
				'url'+'('+"'"+'https://salesforcestore.com/GetImage.ashx?Path=%7E%2FAssets%2FProductImages%2FSF00-0101.jpg&maintainAspectRatio=true&width=415'+"'"+')',
				'url'+'('+"'"+'https://ik.imagekit.io/ontimesupplies/oppictures/images/30178.JPG?tr=w-1500'+"'"+')',
				'url'+'('+"'"+'https://nyc3.digitaloceanspaces.com/aph/app/uploads/2019/04/26160704/1-04851-00_BL_Notebook_Paper_Punch_G.jpg'+"'"+')',
				'url'+'('+"'"+'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg'+"'"+')',
				'url'+'('+"'"+'https://static01.nyt.com/images/2020/02/11/multimedia/11xp-pitbull/11xp-pitbull-superJumbo.jpg'+"'"+')'
					];
// 1 = polar bear
// 2 = ??
// 3 = chicken
// 4 = ??
// 5 = house
// 6 = apple
// 7 = orange
// 8 = car
// 9 = truck
// 10 = table
// 11 = pizza
// 12 = chair
// 13 = computer
// 14 = couch
// 15 = candle
// 16 = pen
// 17 = pencil
// 18 = paper
// 19 = cat
// 20 = dog


var pictures = document.querySelectorAll('.picture');

var picked_noun = document.querySelector('#chosen');
var h3 = document.querySelector('h3');

var four_pics = [];
for (k = 0; k < 4; k++){
	var random = Math.floor(Math.random() * imgs.length)
	four_pics.push(imgs[random])
	imgs.splice(random, 1)

}

var picked_picture = pick_picture();

function pick_picture(){
	var random = Math.floor(Math.random() * four_pics.length)
	return four_pics[random]
}



if (picked_picture == 'url'+'('+"'"+'https://upload.wikimedia.org/wikipedia/commons/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg'+"'"+')') {
	picked_noun.textContent = 'polar bear'
} else if (picked_picture == 'url'+'('+"'"+'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/SGI-2016-South_Georgia_%28Fortuna_Bay%29%E2%80%93King_penguin_%28Aptenodytes_patagonicus%29_04.jpg/1200px-SGI-2016-South_Georgia_%28Fortuna_Bay%29%E2%80%93King_penguin_%28Aptenodytes_patagonicus%29_04.jpg'+"'"+')') {
	picked_noun.textContent = 'penguin'
} else if (picked_picture == 'url'+'('+"'"+'https://5.imimg.com/data5/BL/BJ/MY-13659451/poultry-live-chicken-500x500.jpg'+"'"+')') {
	picked_noun.textContent = 'chicken'
} else if (picked_picture == 'url'+'('+"'"+'https://cdn.mos.cms.futurecdn.net/4GyHT6Ye9u3qLXj9d4QKp9-1200-80.jpg'+"'"+')') {
	picked_noun.textContent = 'weasel'
} else if (picked_picture == 'url'+'('+"'"+'https://www.listenmoneymatters.com/wp-content/uploads/2018/04/LMM-Cover-Images-2.jpg'+"'"+')') {
	picked_noun.textContent = 'house'
} else if (picked_picture == 'url'+'('+"'"+'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png'+"'"+')') {
	picked_noun.textContent = 'apple'
} else if (picked_picture == 'url'+'('+"'"+'https://www.lgssales.com/wp-content/uploads/2017/07/darling-oranges-1.png'+"'"+')') {
	picked_noun.textContent = 'orange'
} else if (picked_picture == 'url'+'('+"'"+'https://static1.cargurus.com/gfx/reskin/bodystyle/2x/hatchback-transparent.png?io=true&format=jpg&auto=webp'+"'"+')') {
	picked_noun.textContent = 'car'
} else if (picked_picture == 'url'+'('+"'"+'https://s29755.pcdn.co/wp-content/uploads/2019/08/2019_Top_Five_Class_5-Mack.jpg'+"'"+')') {
	picked_noun.textContent = 'truck'
} else if (picked_picture == 'url'+'('+"'"+'https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1500,h_1000/https://www.cicis.com/wp-content/uploads/2019/04/pizza_categoryheader.png'+"'"+')') {
	picked_noun.textContent = 'pizza'
} else if (picked_picture == 'url'+'('+"'"+'https://images.crateandbarrel.com/is/image/Crate/BasqueSdChairHoneySHS15_1x1/?$web_zoom$&190411134820&wid=450&hei=450'+"'"+')') {
	picked_noun.textContent = 'chair'
} else if (picked_picture == 'url'+'('+"'"+'https://c.s-microsoft.com/en-us/CMSImages/1920_Panel1_Hero_Desktop.jpg?version=e7d0925b-ff2a-6710-645d-8b37f62d4b29'+"'"+')') {
	picked_noun.textContent = 'computer'
} else if (picked_picture == 'url'+'('+"'"+'https://cdn-images.article.com/products/SKU25A/2890x1500/image48829.jpg?fit=max&w=1920&q=50'+"'"+')') {
	picked_noun.textContent = 'couch'
} else if (picked_picture == 'url'+'('+"'"+'https://cdn2.vectorstock.com/i/1000x1000/10/86/realistic-paraffin-burning-candle-vector-21271086.jpg'+"'"+')') {
	picked_noun.textContent = 'candle'
} else if (picked_picture == 'url'+'('+"'"+'https://salesforcestore.com/GetImage.ashx?Path=%7E%2FAssets%2FProductImages%2FSF00-0101.jpg&maintainAspectRatio=true&width=415'+"'"+')') {
	picked_noun.textContent = 'pen'
} else if (picked_picture == 'url'+'('+"'"+'https://ik.imagekit.io/ontimesupplies/oppictures/images/30178.JPG?tr=w-1500'+"'"+')') {
	picked_noun.textContent = 'pencil'
} else if (picked_picture == 'url'+'('+"'"+'https://nyc3.digitaloceanspaces.com/aph/app/uploads/2019/04/26160704/1-04851-00_BL_Notebook_Paper_Punch_G.jpg'+"'"+')') {
	picked_noun.textContent = 'paper'
} else if (picked_picture == 'url'+'('+"'"+'https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg'+"'"+')') {
	picked_noun.textContent = 'cat'
} else if (picked_picture == 'url'+'('+"'"+'https://static01.nyt.com/images/2020/02/11/multimedia/11xp-pitbull/11xp-pitbull-superJumbo.jpg'+"'"+')') {
	picked_noun.textContent = 'dog'
} else { 
	picked_noun.textContent = 'table'
}


for (var i = 0; i < pictures.length; i++){
	pictures[i].style.backgroundImage = four_pics[i];


	pictures[i].addEventListener('click', function() {
	var clicked_img = this.style.backgroundImage
		if(clicked_img.slice(5, -2) == picked_picture.slice(5, -2)){
			alert('Correct!');
			document.location.reload(true);
		} else {
			this.style.backgroundImage = 'none';
			h3.textContent = 'Incorrect!'
		}
	})

//console.log(clicked_img == picked_picture)

	
}


