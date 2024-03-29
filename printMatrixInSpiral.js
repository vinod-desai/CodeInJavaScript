// Print Matrix in spiral form

const a = [[1, 2, 3, 4], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]];

function spiralPrint(m, n, a) {
  let i,
    k = 0,
    l = 0,
    spiralForm = [];

  /* k - starting row index  
        m - ending row index  
        l - starting column index  
        n - ending column index  
        i - iterator  
    */

  while (k < m && l < n) {
    /* Print the first row from the remaining rows */
    for (i = l; i < n; ++i) {
      spiralForm.push(a[k][i]);
    }
    k++;

    /* Print the last column from the remaining columns */
    for (i = k; i < m; ++i) {
      spiralForm.push(a[i][n - 1]);
    }
    n--;

    /* Print the last row from the remaining rows */
    if (k < m) {
      for (i = n - 1; i >= l; --i) {
        spiralForm.push(a[m - 1][i]);
      }
      m--;
    }

    /* Print the first column from the remaining columns */
    if (l < n) {
      for (i = m - 1; i >= k; --i) {
        spiralForm.push(a[i][l]);
      }
      l++;
    }
  }
  console.log(spiralForm);
}

spiralPrint(a.length, a[0].length, a);
