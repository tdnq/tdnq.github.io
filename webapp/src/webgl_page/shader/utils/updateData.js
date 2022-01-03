import lodash from 'lodash';

export function getUpdateData(data, updateMeta = []) {
  const newData = lodash.clone(data);

  updateMeta.forEach((item) => {
    const position = item.position.split('.');
    let updateTarget = newData;
    for (let i = 0; i < position.length - 1; i++) {
      updateTarget = updateTarget[position[i]];
    }
    updateTarget[position[position.length - 1]] = item.value;
  });
  return newData;
}
