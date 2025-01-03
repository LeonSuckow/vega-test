import { SlOptions } from "react-icons/sl";
import { Layout } from "../../layout/Layout";
export const UserPage = () => {
  return (
    <>
      <Layout>
        <div>
          <h1>Usuários</h1>
          <div>
            <div>
              <span>20</span>
              <span>usuários cadastrados</span>
            </div>
            <div>
              <select name="" id="">
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
              <span>itens por página</span>
            </div>
          </div>
          <table>
            <thead>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Ações</th>
            </thead>
            <tbody>
              <td>John Doe</td>
              <td>john.doe@example.com</td>
              <td>
                <button>
                  <SlOptions />
                </button>
              </td>
            </tbody>
          </table>

          <div>
            <div></div>
            <div>
              <span>Ir para página</span>
              <input type="text" name="" id="" />
              <button className="bg-vega-yellow-800">Ir</button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
