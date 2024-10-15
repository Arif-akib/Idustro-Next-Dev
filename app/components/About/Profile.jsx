export default function AboutProfile() {
  return (
    <>
      <div className="grid grid-cols-2 gap-10 px-[10%] py-10 bg-[url('/images/background/bg-background.jpg')]">
        <div>
          <h2 className="text-5xl font-bold pt-4">Our Company Profile</h2>
          <div className="grid grid-cols-2 pt-10 gap-5">
            <div className="flex items-center gap-2 p-2 rounded bg-white drop-shadow">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[34px] bg-slate-200 rounded-full p-1"
              />
              <div>
                <p className="text-xl font-bold">Company Name </p>
                <p>Naahar Industrial Equipments Co. Ltd. (NIECO Ltd.)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white drop-shadow">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[34px] bg-slate-200 rounded-full p-1"
              />
              <div>
                <p className="text-xl font-bold">Incorporation No.</p>
                <p>C-132025/2016</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white drop-shadow">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[34px] bg-slate-200 rounded-full p-1"
              />
              <div>
                <p className="text-xl font-bold">TIN Certificate No.</p>
                <p>721922456055</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white drop-shadow">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[34px] bg-slate-200 rounded-full p-1"
              />
              <div>
                <p className="text-xl font-bold">Trade License No.</p>
                <p>02064360</p>
              </div>
            </div>
            <div className="flex items-center gap-2 p-2 rounded bg-white drop-shadow">
              <img
                src="/images/icon/right.png"
                alt=""
                className="size-[34px] bg-slate-200 rounded-full p-1"
              />
              <div>
                <p className="text-xl font-bold">Type</p>
                <p>Limited Company</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mt-5">
            <div className="p-4 rounded primary-background text-white drop-shadow ">
              <h2 className="text-xl font-bold mb-1">Head Office</h2>
              <p>
                NIECO Nest, 2nd & 3rd Floor, 194 Central Bashabo, Sabujbag,
                Dhaka-1214, Bangladesh
              </p>
              <p>
                <span className="font-bold">Tel :</span> +8802-4721 7552
              </p>
              <p>
                <span className="font-bold">Fax :</span> +8802-4721 9088
              </p>
            </div>
            <div className="p-4 rounded primary-background text-white drop-shadow ">
              <h2 className="text-xl font-bold mb-1">Registered Office</h2>
              <p>
                DDL Halima Garden, 72 Central Bashabo, Sabujbag, 4th Floor,
                Suite #4/A, Dhaka-1214, Bangladesh
              </p>
            </div>
            <div className="p-4 rounded primary-background text-white drop-shadow ">
              <h2 className="text-xl font-bold mb-1">hittagong Regional Office</h2>
              <p>
                Ambia Legun, Laky Valley Residential Area, Flat No. A-2 (2nd
                Floor), Plot No. 6/7, Road No. 7, Foy's Lake, Khulshi-4225,
                Chittagong.
              </p>
            </div>
          </div>
        </div>
        <img src="/images/Gallery/gallery-2.jpg" alt="" className="w-full" />
      </div>
    </>
  );
}
