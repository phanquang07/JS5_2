//Bài 1: Tính tiền thuế

function tinhThue() {
  var fName = document.querySelector('#inputUser').value
  var tongThuNhap = Number(document.querySelector('#inputIncome').value)
  var soNguoiPT = Number(document.querySelector('#inputPersonNum').value)

  var thuNhapChiuThue = tongThuNhap - 4000000 - (soNguoiPT * 1600000)
  var thueCaNhan = ''

  console.log(thuNhapChiuThue);

  if (thuNhapChiuThue < 0) {
    thueCaNhan = 0
  } else if (thuNhapChiuThue <= 60000000) {
    thueCaNhan = Math.round(thuNhapChiuThue * 0.05)
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    thueCaNhan = Math.round(thuNhapChiuThue * 0.1)
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    thueCaNhan = Math.round(thuNhapChiuThue * 0.15)
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    thueCaNhan = Math.round(thuNhapChiuThue * 0.2)
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    thueCaNhan = Math.round(thuNhapChiuThue * 0.25)
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    thueCaNhan = Math.round(thuNhapChiuThue * 0.3)
  } else if (thuNhapChiuThue > 960000000) {
    thueCaNhan = Math.round(thuNhapChiuThue * 0.35)
  }

  document.querySelector('#displayTax').innerHTML = `Họ tên: ${fName} <br> Thuế: ${thueCaNhan}`
}

document.querySelector('#btn-calcTax').onclick = tinhThue


// Bài 2: Tính tiền cáp

function tinhTienCap() {
  var maKH = document.querySelector('#inputKey').value
  var type = document.querySelector('#inputType').value
  var chanelNum = Number(document.querySelector('#inputChanel').value)
  var billTotal = ''

  switch (type) {
    case '1':
      var numConnect = Number(document.querySelector('#inputNum').value)
      var billFee = 15
      var chanelPre = 50 * chanelNum
      var services = ''

      if (numConnect <= 10) {
        services = 75
      } else if (numConnect > 10) {
        services = 75 + (numConnect - 10) * 5
      }
      break;
    case '2':
      var billFee = 4.5
      var services = 20.5
      var chanelPre = 7.5 * chanelNum
      break;
    default:
      break;
  }

  billTotal = billFee + services + chanelPre

  document.querySelector('#cableBill').innerHTML = `
    Mã KH: ${maKH} <br>
    Tổng tiền: ${billTotal}$
  `
}

document.querySelector('#btn-CableBill').onclick = tinhTienCap

// Check type (doanh nghiệp - hộ dân)
function checkType() {
  var type = document.querySelector('#inputType').value

  if (type === '1') {
    document.querySelector('.connect-num').style.display = 'block'
  } else if (type === '2') {
    document.querySelector('.connect-num').style.display = 'none'
  } else {
    document.querySelector('.connect-num').style.display = 'none'
  }
}