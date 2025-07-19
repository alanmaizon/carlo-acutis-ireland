import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Shop = () => {
  const products = [
    {
      name: "Carlo Acutis Cap",
      price: "$25",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAngsvnx4npUrDzLZNNFvVd7Z4xKHb4XhULRozTNv62g4S7x0tNeMN8zwYOiQepxQWZbmBjrbKnhJCyN5jd_zFv3C1_jBWyi_8p8P0Ijf0HrbwFYy5mUY1_ciVAu01Fj7VsKrlWNyaqMYSQatLVwDSK1_Sot1TE5mEAsjd-mmC1uBjXKWrOqYPGVIaF_Hg1sIxlpXHgY7BYKf5y8k71f097IeeHbPnwe6vyN1AS-_BNrzBVmiDPRbL3D6km42cJyxa8u2V7FzldtPvE"
    },
    {
      name: "Carlo Acutis T-Shirt",
      price: "$35",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkyJC0WniZyk5NzaxMLQ-H7TT0k24ZuXQ0HBkITO8ZosNWUuTw1K-bN9iNaf6xt_0l41w6LLs2-JCic2OVZe-f6ZN1lGGrf7sqi0GT0LBmlV8QFSY8AypK0vUFR6xDW8ddCaDVyQWEj-M_RQnyBRxwiLi_dpGmzD1-UvSnrf5OYv6yeP1-ftQQG6PJM4GyDSlTv2RlkYXdfN3l9FPhdwc7q5ph3BWwaNmTLCk2wtPL-Y5B31KCWQkTXw6oH6BTIKTijB2IvDLLZxnD"
    },
    {
      name: "Carlo Acutis Rosary Beads",
      price: "$15",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChZaDcXAiwuJwxzebg6bkBrUNanDqv8V1ezM-3KOhcWB2tW96JJYgog0axqevngjV_AhOqEjiu26_i_JYiW6MnJslptDWagPXfptzJ7kZGiOf5mej4fb1RGupeOQCx9L6hHyAxmtbkq3jS2rII1Ye9uMosj6Za71_3LYvKHs0ilDZfGlNEUYOpyYlmVYeZ_mrW7eu4dHBNuPI7THdXfoCAhDSfyLXq7DqI302dYw2DNfXpxkpBehdvs71ZZTncqwuq5isjKCYi3jGM"
    },
    {
      name: "Carlo Acutis Prayer Cards",
      price: "$10",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXoQrCDUiBpTLUhAJr41xe5oMea3GTugBL9b7bLdNWRqODJtGq1POm0c5rduEbEjQx9ptEKtZu3HdptgfMC-mBYktwx2rXxDoQQvZ4E_xS6PSEw3hgpTfr_h8fkpbjLNGoK5wbgmdBWO4tRXebYVVrNz9IM-oZolRxXkhMdFpSLzTGvk0zlHVajbLocZGvjYhFMj_mab9zMtaWrq9ir7P6foiL5gccrhpcyiIqu6EocHl6tnMTQul0lpftZnavC4vAoVWWVFsAa2U6"
    },
    {
      name: "Carlo Acutis Socks",
      price: "$12",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyRcgVHSG8B7vfSvgNzK4mO1D0SWTVywCwGJm1vB_ECNaM_O7mt-h14lOV0oW-1Jq-GXurLns3ffsiRUPYw3_Qp0RY5hGggKPohbOSY4fFvPkW_sq7vjzt01adpVN_IO-TGZ6bC-edGGc-NEJ6sr_MlYO3vy-doqw2sEPPRM11Flw4y20a2940FsrwVlpikIE4lYw4AVpjEByftWK41-0RSBpGkcglhCg7UswtwwxR2VZc_WWGSYvAKK2FuKc9nMlHNoptoZPHzTu-"
    },
    {
      name: "Carlo Acutis Mug",
      price: "$18",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBylOZW8t9GBb7CCtUt4gPiz0kVnWWxbCWIA0TvPTd0iy6pxzxNdke_LUeuLqKrXSGKgG5qUpGYJ8qfQwXKEMLN4SaWVSD-XuThqEcxDYehadnx5dBu5uf-ggPHEYdQ4WEEs5oKEKq0uabV935UWTfM-0pKZvjRJ2E0kw_fg9YzKJgSIHvEMYM2Ia6OVESLBlnvmKJsGVdmax-eClQUQzs_QojfHlKBotov_jor8qGSer93uX6GKnEv_bQ9A2kaNQd3bjR9DxbaivAC"
    },
    {
      name: "Carlo Acutis Travel Cup",
      price: "$22",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVaIwH-6amd5h0F-wsZvrnlubmUmSIqMcCS8QwnWJhLSny6xNEc2ySuz99hV9EkUhhgJ2BDwSHH_j0BX9060FuEzY9vJniIxdga8SVelE-7ZeJ6kXSqHY_hSFo5ydpfdkwasepdZJhGHI_SQpL6I41cS_rlVn9ZcCkHQBAFzjAxw-QwPRze7-V1moSnTz_xtFEhQOJKefJ6pfkfanTytv5G9l60dawFQgj6DW1tVdY-9hht2EOKb4bpAQmyT57DDX-VEZHCXx0VlCI"
    },
    {
      name: "Carlo Acutis Keyring",
      price: "$8",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCoNRzhZ4FgR_e8pH4Vu3apeMDbHeVqbF-A-GrsUBQ0q3cQvsvEJP4cQDS21Q82HS1SHD_kUMkfkfTmImBS5FJox8nJ1MORyptSvmDhaCJAbma0yXGHElfogyVJsiiBLd4h-gJLsThpXCmMX2NuAKHO6NvKuv1omz7Z8fsQuvItZfeVxuiGFY7DDMKws_kSkEVYlULSILs0QxKJ869oj8G88RLCsPC2yU9EFpc1jW_2fkTnQPSnzPiHCA8ZqCaNVIcGYMI3afpeJ9i9"
    },
    {
      name: "Carlo Acutis Notebook",
      price: "$15",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3DItSfZsPGH6wgMbULY9crcU6ByVopLUXpxOjKjRxLdeT2M-OBmxc9buC9kw77YWlgBdnFvRMJ5kWO6hO3V8UconWe8nxLlQ1HuLskiLWqnPh4kxmewZgc5TUVMQkcm6va9xoqAs_7OhkfcWArwSzz083r6PjId0sk9nGRfYtAl_KjDfBtKGNfrPmPE99e6JrvmYHyQOWjQNr7MT2r7lg_i2wxPsVkuuco0WkkXRpiTaNy89yKmNNjgLFbHY83vlJ2E6lOcuVL5LM"
    },
    {
      name: "Carlo Acutis Poster",
      price: "$20",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPFl-T7vWQXWCIS7ysmPQjYCYwBoy0A_mvnVN3MzVxllehsvcxLHUu1evsQlMZZbkZKTNMUE2fXUQKyr03521hWjCQII4OFgy_ovaKwOBFMMBKKUMeKgKmPHV_MAo3p0jZzPY4854ClI5Ph0yKq5jAqk1wsJU0YTpHFDLsLIyTRTn7Vbv13dRyymsFRS4elVPmbtkYhifMpO-FkkouhMJMpZOGLGHOM8vpRaS4CynYjjTWjKmt8hpFdN_2NTBv0tLiNZhYZfEHAX6D"
    },
    {
      name: "Carlo Acutis Calendar",
      price: "$14",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVlPJgUz599LWmbgbqtpuD4sF07n38J-dacW9sxlAeQd3N6ExWJyVzL4C-yITZyVzS_GtHQFVt9nYOpfJG_23s-XueMmHtULywsVuel5om7rxe6j0SVryiJ8rvh-fjohoxOYseuuzY5V0cVBlwizcKxzqpKcCxqm65zZdF3mlSeYdeevP1_mjMnBgASZ7xDf9sZbcRlVz4BI0jnO4OdQGQlJezZLpvDy-TBWkqAiFN_IQZoPhXuOdR8iP8Ze9fMkYaC6dW2hCW1zn7"
    },
    {
      name: "Carlo Acutis Tote Bag",
      price: "$28",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCj813U9rPoutDY_g8CGiiJHDYTkCIhtHloFZvxHD9pfWsIvlSDp3k8Toe3xNmBcAtwy8bxSp98Zd6jMCSbxUj9fL-LETqSH9Nj2WySrDXwxr4T3Xrs2f_nlVMpOb0YeUvPjhSt3fIlX-j8Xwh9HMp4xc8IFdixT4C63ypGeM6uTqEyB52dYa-ABmg6yDZhtQrJFwsq4YXHQvbmkz598CuTkiXPAXtj5iRQ_Ku9yN5rVBY7587uhygQcl7QL0MTopFWV0vlq5AR3E4r"
    }
  ];

  return (
    <DefaultLayout>
        <section className="py-16 bg-stone-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-light text-stone-700 tracking-wide text-center mb-4">
              CARLO ACUTIS SHOP
            </h2>
            <div className="w-24 h-px bg-stone-300 mx-auto mb-12"></div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {products.map((product, index) => (
                <div key={index} className="bg-white border border-stone-200 overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-stone-700 text-sm font-medium leading-tight mb-2">
                      {product.name}
                    </h3>
                    <p className="text-stone-500 text-sm">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-stone-600 font-light mb-6 text-lg">
                Interested in purchasing any of these items?
              </p>
              <a
                href="#contact-form"
                className="inline-block bg-stone-700 text-white px-8 py-3 font-light text-sm uppercase tracking-wider hover:bg-stone-800 transition-colors duration-200"
              >
                Contact Us to Order
              </a>
            </div>
          </div>
        </section>
    </DefaultLayout>
  );
};

export default Shop;