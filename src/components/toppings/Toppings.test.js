import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event";

test("sosların ekleme çıkarma işelminin toplama olan etkisi", async () => {
  render(<Toppings />);

  const user = userEvent.setup();

  // toplam başlığını çağırma

  const total = screen.getByRole("heading", { name: /Soslar Ücreti/i });

  //kiraz checkboxını çağırma
  // sosu sepete ekleme
  const cherry = await screen.findByRole("checkbox", { name: /Cherries/i });
  await user.click(cherry);

  // toplamı denetleme

  expect(total).toHaveTextContent("3");

  //mocihiyi checkboxını çağırma
  // sosu sepete ekleme
  const mochi = await screen.findByRole("checkbox", { name: /Mochi/i });
  await user.click(mochi);

  // toplam kontrolu

  expect(total).toHaveTextContent("6");
});
