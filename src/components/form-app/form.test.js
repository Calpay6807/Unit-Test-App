import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("koşulların onylanmasına göre button aktifliği", async () => {
  render(<Form />);
  //userEvent kurulum
  const user = userEvent.setup();
  // gerekli elemanları alma
  const orderBtn = screen.getByRole("button");

  const checkBox = screen.getByRole("checkbox", {
    name: "Okudum onaylıorum",
  });
  //buton başlangıçta inaktiftir
  expect(orderBtn).toBeDisabled();

  //checkbox tiksizmi kontrol etme
  expect(checkBox).not.toBeChecked();

  //checkboxa yıkla ve butonun aktifliğini kontrol et
  await user.click(checkBox);
  expect(orderBtn).toBeEnabled();

  //checkboxtan tiki kaldır ve butonun aktifliğini kontrol et
  await user.click(checkBox);
  expect(orderBtn).toBeDisabled();
});

test("onayla butonuna hover olunca bildirim çıkar", async () => {
  render(<Form />);

  const user = userEvent.setup();
  //gerekli elemanlar
  const checkBox = screen.getByRole("checkbox");
  const ordBtn = screen.getByRole("button");

  await user.click(checkBox);
  fireEvent.mouseEnter(ordBtn);

  //bildirimi çağırma
  const popup = screen.getByText("Sen Hiçbir", { exact: false });

  //bildirim görünüyomu

  expect(popup).toBeVisible();

  //mouse butondan çekme

  fireEvent.mouseLeave(ordBtn);

  //popup gözükmüyor mu
  expect(popup).not.toBeVisible();
});
