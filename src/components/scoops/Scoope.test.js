import { findAllByRole, render, screen } from "@testing-library/react";
import Scoops from ".";
import userEvent from "@testing-library/user-event";

/*
!SEÇİCİLER
*KOMUT [ALL] BY SEÇİCİ
* KOMUT GET FİND QUERY
* GET = ELEMENTLER BAŞLANGIÇTA DOMDA VAR İSE KULLANILIR
* FİND = ELEMENTİN NEZAMAN EKRANA BASILACAĞI BELLİ DEĞİLSE KULLANILIR
* QUERY = ELEMENTLER DOMDA YOK İSE KOŞLA GÖRE GELİCEK İSE KULLANILIR

NOT : FİND METHODU ASYNC BİR METHOD OLDUĞU İÇİN 
KULLANILIRKEN ASYNC AWAİT BİRLİKTE KULLANILALIDIR

 */

test("Apidan gelen her bir çeşit için ekrana kart basma", async () => {
  render(<Scoops />);

  //resimleri çağırma
  const images = await screen.findAllByRole("img", { name: "çeşit" });

  //gelen resimlerin sayısı 4 mü
  expect(images).toHaveLength(4);
});

test("çeşit ekleme toplama yansıyormu", async () => {
  render(<Scoops />);

  const user = userEvent.setup();

  // toplam fiyata erişme
  const total = screen.getByRole("heading", { name: /Çeşitler Ücreti/i });

  // ekle butonuna ulaşma

  const addButton = await screen.findAllByRole("button", { name: "ekle" });

  //bir tane çeşit ekle ve fiyatı kontrol et

  await user.click(addButton[0]);
  expect(total).toHaveTextContent("20");

  // vanilya ekle butonuna çift tıklama
  await user.dblClick(addButton[1]);
  expect(total).toHaveTextContent("60");
});

test("çeşit sıfırlamanın işleminin toplama yansıması", async () => {
  render(<Scoops />);
  const user = userEvent.setup();

  const total = screen.getByRole("heading", { name: /çeşitler ücreti/i });

  const deleteButton = await screen.findAllByRole("button", {
    name: "Sıfırla",
  });
  const addButton = await screen.findAllByRole("button", { name: "ekle" });

  // 2 farklı çeşit ekleme
  await user.click(addButton[2]);
  await user.dblClick(addButton[3]);

  expect(total).toHaveTextContent(60);

  // sepette bir adet olan çeşitli sıfırla ve toplamı kontrol et
  await user.click(deleteButton[2]);
  expect(total).toHaveTextContent(40);

  //sepette iki adet olan çeşitli sıfırla ve toplamı kontrol et
  await user.click(deleteButton[3]);
  expect(total).toHaveTextContent(0);
});
