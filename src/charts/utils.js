export function generateDataWeek(dateRange = 'week') {
  const categories = ['可回收垃圾', '厨余垃圾', '有害垃圾', '其他垃圾']
  let days

  if (dateRange === 'week') {
    days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  } else if (dateRange === 'lastMonth') {
    let date = new Date()
    date.setMonth(date.getMonth() - 1)
    let daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

    days = Array.from({length: daysInMonth}, (_, i) => `上月${i + 1}日`)
  }

  let data = []

  for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < categories.length; j++) {
      let value
      switch (categories[j]) {
        case '可回收垃圾':
          value = Math.floor(Math.random() * 10) + 16
          break
        case '厨余垃圾':
          value = Math.floor(Math.random() * 5) + 6
          break
        case '其他垃圾':
          value = Math.floor(Math.random() * 3) + 1
          break
        case '有害垃圾':
          value = Math.floor(Math.random() * 4) + 8
          break
      }

      data.push({
        time: days[i],
        value: value,
        category: categories[j],
      })
    }
  }

  return data
}


export function calculateCategorySums(data) {
  const categorySums = {};

  data.forEach(item => {
    if (categorySums[item.category] === undefined) {
      categorySums[item.category] = 0;
    }
    categorySums[item.category] += item.value;
  });

  const result = [];

  for (let category in categorySums) {
    result.push({
      type: category,
      value: categorySums[category],
    });
  }

  return result;
}

