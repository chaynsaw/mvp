import React from 'react';
import ListItem from './ListItem.jsx';

const arrImages = [
  'https://sealgrinderpt.com/wp-content/uploads/2016/11/baan-muay-thai-mark-klemm-1024x683-1160x665.jpg', 
  'http://static1.squarespace.com/static/539088b5e4b056260cc4edf2/54b323c1e4b0c6ceb95dea12/54b323c2e4b0c6ceb95dea13/1421026243253/10698637_10152856502435407_2745670946384291701_n.jpg?format=1500w', 
  'https://images.milled.com/2017-09-26/8sN_sSQKQda0zzkj/mND8keTZbmNH.jpg',
  'https://alldayruckoff.com/wp-content/uploads/2017/10/21993121_10155840777430407_6492378035174422045_o.jpg',
  'https://blog.goruck.com/wp-content/uploads/2019/02/image-60.png',
  'https://i2.wp.com/www.fliesonawall.com/wp-content/uploads/2017/09/tired.jpg',
  'https://static1.squarespace.com/static/543dfe16e4b056c0a04c541d/t/5827593046c3c4d32c94282b/1478973748797/',
  'http://www.fliesonawall.com/wp-content/uploads/2017/09/water-baby.jpg',
  'https://blog.goruck.com/wp-content/uploads/2017/09/CHALLENGE_PANT_ALEX_THRASHER22-1040x659.jpg',
  'https://onmywaytosar.files.wordpress.com/2014/04/wpid-screenshot_2014-04-14-20-59-43-1.jpg',
  'https://m.media-amazon.com/images/M/MV5BZjE2YzZlYzgtN2U4ZS00YTJkLWFiMjEtY2ZhZjJiNTVmOThhXkEyXkFqcGdeQXVyMjMzNTAwNTU@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
  'https://pbs.twimg.com/media/Dont1OnX0AANjYq.jpg',
  'https://alldayruckoff.com/wp-content/uploads/2017/10/image2-2.jpg',
  'https://www.jonhurtado.com/wp-content/uploads/2014/11/Cadre-Bert_Selection-015-1.jpg', 
]
function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

const randomImage = randomNoRepeats(arrImages);
const List = (props) => (
  <div>
    There are { props.items.length } items.
    { props.items.map(item => {
      return <ListItem item={item} src={randomImage()}/>
    })}
  </div>
)

export default List;