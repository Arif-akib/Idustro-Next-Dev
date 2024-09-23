export default function NavAdd() {
    return (
      <>
        <div className="bg-black text-gray-400 px-[10%] h-[55px] flex justify-between items-center">
          <p className="">
            Welcome to our <span className="text-[#FA4318]">Industo</span> Company
          </p>
          <div className="flex items-center gap-10 justify-between">
            <p className="flex gap-2 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className=" hover:text-[#FA4318]"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 12V7H11V14H17V12H13Z"></path></svg>
              We'are Open : Mon - sat 8:00 - 18:00
            </p>
            <p className="h-[55px] w-[1px] bg-gray-500 rotate-[30deg]"></p>
            <div className="flex items-center gap-4 text-lg">
              {/* <i ></i> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className=" hover:text-[#FA4318]"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className=" hover:text-[#FA4318]"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className=" hover:text-[#FA4318]"><path d="M19.9887 11.5716C19.9029 9.94513 19.3313 8.44745 18.4163 7.22097C18.1749 7.48407 17.8785 7.7698 17.4957 8.09159C16.5881 8.85458 15.4887 9.54307 14.1834 10.101C14.3498 10.4506 14.5029 10.7899 14.6376 11.1098L14.6388 11.1125C14.6652 11.1742 14.6879 11.2306 14.7321 11.3418C14.7379 11.3562 14.7433 11.3697 14.7485 11.3825C16.2621 11.2122 17.8576 11.2749 19.4049 11.4845C19.6106 11.5123 19.805 11.5415 19.9887 11.5716ZM10.6044 4.1213C10.7783 4.36621 10.9602 4.62859 11.1803 4.95378C11.7929 5.8589 12.396 6.81391 12.9604 7.79507C13.0749 7.99416 13.187 8.19289 13.2964 8.39112C14.5193 7.90993 15.5296 7.30281 16.3438 6.62486C16.6731 6.35063 16.9383 6.093 17.1403 5.86972C15.7501 4.70277 13.9571 4 12 4C11.524 4 11.0576 4.04158 10.6044 4.1213ZM4.25266 9.99755C4.83145 9.98452 5.48467 9.94941 6.29303 9.87518C7.90024 9.72758 9.54141 9.46249 11.1549 9.05274C10.5719 8.03721 9.93888 7.02331 9.29452 6.05378C8.98479 5.58775 8.68357 5.14992 8.45484 4.82642C6.39541 5.84613 4.83794 7.72658 4.25266 9.99755ZM5.78366 17.036C6.17111 16.4693 6.68061 15.8314 7.35797 15.1374C8.81199 13.6478 10.5286 12.4878 12.5139 11.8473C12.5417 11.8391 12.5604 11.8336 12.576 11.829C12.411 11.4651 12.2562 11.1405 12.1003 10.8342C10.2643 11.3687 8.3303 11.703 6.40279 11.8762C5.46319 11.9606 4.62005 11.9981 4 12.0044C4.00102 13.9112 4.66915 15.662 5.78366 17.036ZM15.0045 19.4166C14.9001 18.8745 14.7669 18.2706 14.5899 17.574C14.2689 16.3112 13.8668 15.012 13.373 13.7078C11.3712 14.4343 9.77574 15.4974 8.54309 16.7649C7.94904 17.3757 7.51244 17.9537 7.22642 18.4203C8.55892 19.4127 10.2109 20 12 20C13.0626 20 14.0769 19.7928 15.0045 19.4166ZM16.8778 18.3414C18.4073 17.1632 19.4985 15.444 19.8652 13.4703C19.5253 13.3865 19.094 13.3005 18.6196 13.2346C17.5756 13.0897 16.5014 13.0655 15.4409 13.2018C15.8933 14.4764 16.2642 15.7332 16.5608 16.9361C16.6903 17.4614 16.7958 17.9358 16.8778 18.3414ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"></path></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className=" hover:text-[#FA4318]"><path d="M7.44262 5.34998C8.08197 5.34998 8.67213 5.39945 9.21311 5.54786C9.7541 5.6468 10.1967 5.84468 10.5902 6.09203C10.9836 6.33938 11.2787 6.68566 11.4754 7.13089C11.6721 7.57612 11.7705 8.12029 11.7705 8.71393C11.7705 9.40651 11.623 10.0002 11.2787 10.4454C10.9836 10.8906 10.4918 11.2864 9.90164 11.5832C10.7377 11.8305 11.377 12.2758 11.7705 12.8694C12.1639 13.463 12.4098 14.2051 12.4098 15.0461C12.4098 15.7387 12.2623 16.3323 12.0164 16.827C11.7705 17.3217 11.377 17.7669 10.9344 18.0638C10.4918 18.3606 9.95082 18.6079 9.36066 18.7563C8.77049 18.9047 8.18033 19.0037 7.59016 19.0037H1V5.34998H7.44262ZM7.04918 10.8906C7.59016 10.8906 8.03279 10.7422 8.37705 10.4949C8.72131 10.2475 8.86885 9.80227 8.86885 9.2581C8.86885 8.96128 8.81967 8.66446 8.72131 8.46658C8.62295 8.2687 8.47541 8.12029 8.27869 7.97188C8.08197 7.87294 7.88525 7.774 7.63934 7.72453C7.39344 7.67506 7.14754 7.67506 6.85246 7.67506H4V10.8906H7.04918ZM7.19672 16.7281C7.4918 16.7281 7.78689 16.6786 8.03279 16.6291C8.27869 16.5797 8.52459 16.4807 8.72131 16.3323C8.91803 16.1839 9.06557 16.0355 9.21311 15.7881C9.31148 15.5408 9.40984 15.244 9.40984 14.8977C9.40984 14.2051 9.21312 13.7104 8.81967 13.3641C8.42623 13.0673 7.88525 12.9189 7.2459 12.9189H4V16.7281H7.19672ZM16.6885 16.6786C17.082 17.0744 17.6721 17.2722 18.459 17.2722C19 17.2722 19.4918 17.1238 19.8852 16.8765C20.2787 16.5797 20.5246 16.2828 20.623 15.986H23.0328C22.6393 17.1733 22.0492 18.0143 21.2623 18.5585C20.4754 19.0532 19.541 19.35 18.4098 19.35C17.6229 19.35 16.9344 19.2016 16.2951 18.9542C15.6557 18.7069 15.1639 18.3606 14.7213 17.8659C14.2787 17.4206 13.9344 16.8765 13.7377 16.2334C13.4918 15.5903 13.3934 14.8977 13.3934 14.1062C13.3934 13.3641 13.4918 12.6715 13.7377 12.0284C13.9836 11.3853 14.3279 10.8411 14.7705 10.3464C15.2131 9.90121 15.7541 9.50545 16.3443 9.2581C16.9836 9.01075 17.6229 8.86234 18.4098 8.86234C19.2459 8.86234 19.9836 9.01075 20.623 9.35704C21.2623 9.70333 21.7541 10.0991 22.1475 10.6927C22.541 11.2369 22.8361 11.88 23.0328 12.5726C23.1311 13.2652 23.1803 13.9577 23.1311 14.7493H16C16 15.5408 16.2951 16.2828 16.6885 16.6786ZM19.7869 11.4843C19.4426 11.138 18.9016 10.9401 18.2623 10.9401C17.8197 10.9401 17.4754 11.039 17.1803 11.1874C16.8852 11.3358 16.6885 11.5337 16.4918 11.7316C16.2951 11.9295 16.1967 12.1768 16.1475 12.4242C16.0984 12.6715 16.0492 12.8694 16.0492 13.0673H20.4754C20.3771 12.3252 20.1311 11.8305 19.7869 11.4843ZM15.459 6.2899H20.9672V7.62559H15.459V6.2899Z"></path></svg>
            </div>
          </div>
        </div>
      </>
    );
  }
  