let newrpBtn=document.querySelector('#new-rp');
newrpBtn.addEventListener('click', () => {
    // Lấy tham chiếu đến phần tử input
    const reportDateInput = document.getElementById("report-date");
    // Lấy thời gian hiện tại ở định dạng "dd/mm/yyyy hh:mm AM/PM"
    const now = moment().tz("Asia/Ho_Chi_Minh");
    const dateString = now.format("L");
    const timeString = now.format("LT");
    const dateTimeString = `${dateString} ${timeString}`;
    const isoDateTimeString = now.format("YYYY-MM-DDTHH:mm");
    // Gán giá trị thời gian vào input
    reportDateInput.value = isoDateTimeString;
    document.querySelector('.bg').style.display = 'block';
});

let confirmBtn=document.querySelector('#confirm');
confirmBtn.addEventListener('click', () => {
    var rp_idField=document.getElementById('report_id').value;
    var rp_nameField=document.getElementById('report_name').value;
    var start_DateField=document.getElementById('start-time').value;
    var end_DateField=document.getElementById('end-time').value;
    if( rp_idField == "" || rp_nameField == "" || start_DateField == "" || end_DateField == "")
    {
        alert('Không được bỏ trống thông tin!');
        return false;
    } 
    else if (start_DateField >= end_DateField) {
      alert("Thời gian bắt đầu phải trước thời gian kết thúc!");
      start_DateField.value = "";
      end_DateField.value = "";
      return false;
    } 
    else 
    {
        alert('Thêm báo cáo thành công!')
        document.querySelector('.bg').style.display = 'none';
    }
});

let cancelBtn=document.querySelector('#cancel');
cancelBtn.addEventListener('click', () => {
    document.querySelector('.bg').style.display = 'none';
});

window.addEventListener('DOMContentLoaded', function() {
    const userInfo = document.querySelector('.user-info');
    const userInput = document.getElementById('user');
    userInput.value = userInfo.textContent;
});

const cells = document.querySelectorAll('#content td');
cells.forEach(cell => {
  cell.setAttribute('contenteditable', true);
});

const labels = document.querySelectorAll('.lable');
labels.forEach(label => {
    label.addEventListener('click', () => {
    const ol = label.querySelector('ol');
    const iconic = label.parentElement.querySelector('.iconic');

        if (ol.style.display === 'none' || !ol.style.display) {
        ol.style.display = 'block';
        iconic.setAttribute('name', 'chevron-up-sharp');
        } else {
        ol.style.display = 'none';
        iconic.setAttribute('name', 'chevron-down-sharp');
        }
    });
});

let chat1 = document.querySelector('#chat1');
let chat2 = document.querySelector('.chat2-container');
let closeBtn = document.querySelector('#closeBtn')
chat1.addEventListener('click', () => {
    chat2.style.display = 'block';
    chat1.style.visibility = 'hidden';
});
closeBtn.addEventListener('click', () => {
    chat2.style.display = 'none';
    chat1.style.visibility = 'visible';
});

  

  