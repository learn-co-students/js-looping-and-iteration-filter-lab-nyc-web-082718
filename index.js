// // Code your solution in this file

function findMatching(array, name) {
  return array.filter(function (names) { return names.toUpperCase() === name.toUpperCase(); })
}

function fuzzyMatch(array, name) {
  return array.filter(function (names) { return names[0].toUpperCase() === name[0].toUpperCase(); })
}

function matchName(array, string) {
  return array.filter(function (object) { return object.name === string; })
}



//   describe('matchName()', function () {
//     it('accesses the data structure to check if name matches', function () {
//       const drivers = [
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh' },
//         {
//           name: 'Sammy',
//           hometown: 'New York' } ,
//         {
//           name: 'Sally',
//           hometown: 'Cleveland' },
//         {
//           name: 'Annette',
//           hometown: 'Los Angeles' },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay' }
//       ];
//
//       expect(matchName(drivers, 'Bobby')).to.eql([
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh'
//         },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay'
//         }
//       ]);
//     });
//   });
// });
