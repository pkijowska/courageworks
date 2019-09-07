import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
const startIndex = (pageNumber -1 ) * pageSize;
//chaining all lodash method
return _(items).slice(startIndex).take(pageSize).value();
//slicing the array starting from startIndex
// _.slice(items, startIndex)
}
