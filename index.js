let currentBookingCode = "";
let isBookingValid = false;
let totalRevenue = 0;
let totalBookings =0;
let choice;

do {
    choice = prompt(
        "=*80\n"+
        "HỆ THỐNG BÁN VÉ RẠP MOONLIGHT CINEMA\n"+
        "=*80\n"+
        "1.Nhập và kiểm chuẩn mã đặt vé\n"+
        "2.Tính tiền vé xem phim\n"+
        "3.Thẩm định số seri vé may mắn\n"+
        "0.Thoát chương trình\n"+
        "=*80\n"+
        "Nhập vào lựa chọn của bạn:"
    );

    switch(choice){
        case "1":
            input = prompt("Nhập vào mã đặt vé:");
            if(input){
                currentBookingCode ="";
                isBookingValid= false;
                let cleanInput = input.trim().toUpperCase().replaceAll(" ");
                const trueCin = cleanInput.startWith("CIN-"); 
                if (cleanInput.length >6 && trueCin == true ){
                    isBookingValid = true;
                    currentBookingCode = cleanInput;
                    console.log(`[Hệ Thống] mã ${cleanInput} là hợp lệ`);
                    alert("Mã hợp lệ và đang tiến hành lưu!");
                }else{
                    isBookingValid = false;
                    console.log(`[Hệ Thống] mã ${cleanInput} không hợp lệ`);
                    alert("Mã nhập vào phải từ 6 kí tự trở đi và bắt đầu bằng CIN-");
                    break;
                }
            }else{
                console.log("[Hệ Thống] Lỗi dữ liệu đầu vào");
                alert("Không được bỏ trống ô nhập mã");
                break;
            }
            break;
        case "2":
            if (isBookingValid == true){
                let ticketCount = prompt("Nhập vào số lượng vé:");
                const trueTicketCount = ticketCount.isInteger(value);
                let pricePerTicket = prompt("Nhập vào giá của từng vé:");
                const truePricePerTicket = pricePerTicket.isInteger(value);
                if(trueTicketCount == false || ticketCount <= 0){
                    console.log("[Hệ Thống] số lượng phiếu không hợp lệ");
                    alert("Không được nhập chữ hoặc số <=0 hoặc số thập phân hoặc bỏ trống");
                    break;
        
                }
                if (truePricePerTicket == false || pricePerTicket <=0){
                    console.log("[Hệ Thống] Lỗi dữ liệu đầu vào");
                    alert("Giá tiền không được bỏ trống và phải lớn hơn 0!");
                    break;
                }
                const baseCost = ticketCount * pricePerTicket;
                if (ticketCount >=4){
                    const discount = baseCost * 0.1;
                };
                const servicePrice = (baseCost - discount)* 0.08;
                const totalPrice = (baseCost - discount) + servicePrice;
                totalRevenue += totalPrice;
                totalBookings += 1;
                currentBookingCode ="";
                isBookingValid = false;

                console.log(
                    "SL  |  Đơn giá  |  Chi Phí CS  |  Giảm giá  |  Phụ Phí  |  Tổng TT  |\n"+
                    `${ticketCount}  |  ${pricePerTicket}  |  ${baseCost}  |  ${discount}  |  ${servicePrice}  |  ${totalPrice}  |`

                );
            }else{
                console.log("[Hệ Thống] điều kiện không hợp lệ");
                alert("Bạn phải nhập mã đặt vé ở case 1 trước!!");
                break;
            }
            break;
        case "3":
            const inputSeri = prompt("Nhập vào số seri trên vé phim:");
            if(inputSeri){
                const cleanInputSeri = inputSeri.trim().replaceAll("");
                const startSeri = cleanInputSeri.startsWith("0");
                for( i =0 ; i < cleanInputSeri.length; i++){
                    if(cleanInputSeri[i]<0 || cleanInputSeri >9){
                        console.log("[Hệ Thống] số seri chỉ chưa kí tự từ 0 tới 9");
                        alert("Số seri chỉ chứa kí tự từ 0 tới 9");
                        break;
                    }
                }
                if(cleanInputSeri.length < 2){
                    console.log("[Hệ Thống] Lỗi dữ liệu đầu vào");
                    alert("Mã nhập vào phải có độ dài tối thiểu là 2");
                    break;
                };
                let temp ="";
                for(i=cleanInputSeri.length ; i>0 ; i--){
                    temp += cleanInputSeri[i];
                };
                let flagSeri = true;
                for(i = 0; i< cleanInputSeri.length;i++){
                    for(j= temp.length; j >0; j--){
                        if(cleanInputSeri[i] !== temp[j]){
                            flagSeri = false
                        };
                    };
                };
                let present = "";
                if(flagSeri == true && temp.length == cleanInputSeri.length && temp.length %9 ==0){
                    present = "Giải đặc biệt";
                }else if(flagSeri == true && temp.length == cleanInputSeri.length && temp.length %9 != 0 ){
                    present = "Giải nhất";
                }else if(flagSeri == false && temp.length != cleanInputSeri.length && temp.length %9 != 0){
                    present = "Giải Nhì";
                }
                console.log("[Hệ Thống] đã phân tích số seri và phần quà");
                alert(
                    "Chuỗi số | Đảo ngược | Tổng CS | Chia hết 9 | Kết quả\n"+
                    `${cleanInputSeri} | ${temp} | ${cleanInputSeri.length + temp.length} | ${flagSeri} | ${present}`
                );


            }else{
                console.log("[Hệ Thống] Lỗi dữ liệu đầu vào");
                alert("Mã số seri không được để trống");
                break;
            };
            break;
        case "0":
            alert("Đang thoát chương trình");
            break;
        default:
            alert("Lựa chọn không hợp lệ!!");
            break;
    }

}while(choice !== "3");
