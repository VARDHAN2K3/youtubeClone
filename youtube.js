const contents = [{
        link : 'n2RNcPRtAiY',
        thumbnailNum : 1,
        duration : '14:20',
        iconNum : 1,
        title : 'Talking Tech and AI with Google CEO Sundar Pichai!',
        chName : 'Marques Brownlee',
        views : '3.4M views &#183 6 months ago'
    },{
        link : 'mP0RAo9SKZk',
        thumbnailNum : 2,
        duration : '8:22',
        iconNum : 2,
        title : 'Try Not To Laugh Challenge #9',
        chName : 'Markiplier',
        views : '19M views &#183 4 yearss ago'
    },{
        link : 'FgjPQQeTh1w',
        thumbnailNum : 3,
        duration : '9:13',
        iconNum : 3,
        title : 'Crazy Tik Toks Taken Moments Before DISASTER',
        chName : 'SSSniperWolf',
        views : '12M views &#183 1 year ago'
    },{
        link : '094y1Z2wpJg',
        thumbnailNum : 4,
        duration : '22:09',
        iconNum : 4,
        title : 'The Simplest Math Problem No One Can Solve-Collatz Conjecture',
        chName : 'Veritasium',
        views : '18M views &#183 4 months ago'
    },{
        link : '86CQq3pKSUw',
        thumbnailNum : 5,
        duration : '11:17',
        iconNum : 5,
        title : 'Kadane\'s Algorithm to Maximum Sum Subarray Problem',
        chName : 'CS Dojo',
        views : '519k views &#183 5 years ago'
    },{
        link : 'yXWw0_UfSFg',
        thumbnailNum : 6,
        duration : '19:59',
        iconNum : 6,
        title : 'Anything You Can Fit In The Circle I\'ll Pay For',
        chName : 'MrBeast',
        views : '141M views &#183 1 year ago'
    },{
        link : 'fNVa1qMbF9Y',
        thumbnailNum : 7,
        duration : '10:13',
        iconNum : 7,
        title : 'Why Planes Don\'t Fly Over Tibet',
        chName : 'RealLifeLore',
        views : '6.6M views &#183 1 year ago'
    },{
        link : 'lFm4EM1juls',
        thumbnailNum : 8,
        duration : '7:12',
        iconNum : 8,
        title : 'Inside The World\'s Biggest Passenger Plane',
        chName : 'Tech Vision',
        views : '3.7M views &#183 10 months ago'
    },{
        link : 'ixmxOlcrlUc',
        thumbnailNum : 9,
        duration : '13:17',
        iconNum : 9,
        title : 'The SECRETE to Super Human STRENGTH',
        chName : 'ThenX',
        views : '20M views &#183 3 years ago'
    },{
        link : 'R2vXbFp5C9o',
        thumbnailNum : 10,
        duration : '7:53',
        iconNum : 10,
        title : 'How The World\'s Largest Cruise Ship Makes 30,000 Meals Every Day',
        chName : 'Business Insider',
        views : '14M views &#183 1 year ago'
    },{
        link : '0nZuYyXET3s',
        thumbnailNum : 11,
        duration : '4:10',
        iconNum : 11,
        title : 'Dubai\'s Crazy Underwater Train and Other things #Only in Dubai',
        chName : 'Destination Tips',
        views : '3M views &#183 1 year ago'
    },{
        link : '9iMGFqMmUFs',
        thumbnailNum : 12,
        duration : '4:51',
        iconNum : 12,
        title : 'What would happen if you didn\'t drink water?-MIA Nacamulli',
        chName : 'TED-Ed',
        views : '12M views &#183 5 years ago'
    }
];

let htmlContent = '';
contents.forEach(content =>{
    htmlContent += `
        <section class="video-grid">
            <div class="thumbnail-div">
                <a href="https://www.youtube.com/watch?v=${content.link}">
                    <img class="channel-thumbnail" src="thumbnail-${content.thumbnailNum}.webp">
                </a>
                <div class="time-duration">${content.duration}</div>
            </div>
            <div class="video-content">
                <div class="channel-icon-div">
                    <a target="_self" href="youtube.com">
                        <img class="channel-icon" src="channel-${content.iconNum}.jpeg">
                    </a>
                    <div class="channel-toolTip">
                        <img class="channel-icon-tt" src="channel-${content.iconNum}.jpeg"> 
                        <div class="channel-name-tt">${content.chName}</div>
                    </div>
                </div>
                <div class="video-info">
                    <div class="video-title">${content.title}</div>
                    <p class="channel-name">${content.chName}</p>
                    <p class="views-time">${content.views}</p>
                </div>
            </div>
        </section>
    `;
});
document.querySelector('.js-content').innerHTML = htmlContent;

