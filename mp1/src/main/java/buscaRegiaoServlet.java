import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/buscaRegiaoServlet")
public class buscaRegiaoServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");

        String regiaoDigitada = request.getParameter("tregiao");
        String resultadoBusca = buscarItinerariosPorRegiao(regiaoDigitada);

        PrintWriter out = response.getWriter();

        out.println("<html>");
        out.println("<body>");

        out.println("<h1>Resultado da Busca</h1>");
        out.println("<p>Regiao: " + regiaoDigitada.toUpperCase() + "</p>");
        out.println("<h4>Possíveis pontos de parada: </h4>");
		out.println("<p>" + resultadoBusca + "</p>");

        out.println("</body>");
        out.println("</html>");

		// Limpar o buffer e fechar o PrintWriter
		out.flush();
		out.close();
    }

	private String buscarItinerariosPorRegiao(String regiao) {
		// Simulação de dados de itinerários por região
		if ("Norte".equalsIgnoreCase(regiao)) {
			return "Terminal Caffé, Av. Paulista, Rua Augusta, R. da Consolação, Al. Santos, São Januário, R. Oscar Freire, Av. Rebouças, R. Estados Unidos, R. Haddock Lobo, UFSCar";
		} else if ("Sul".equalsIgnoreCase(regiao)) {
			return "Terminal Grená, Av. 23 de Maio, Av. Jabaquara, Av. Indianópolis, Petronas, R. Domingos de Morais, Av. Ibirapuera, R. Vergueiro, Av. Sena Madureira, R. Pedro de Toledo, Ocean Drive";
		} else if ("Leste".equalsIgnoreCase(regiao)) {
			return "Terminal Folclore, R. Itaquera, Av. Radial Leste, R. Tuiuti, R. Vilela,  Golden Gate, R. Dr. Luís Aires, Av. Sapopemba, R. Salim Farah Maluf, R. Serra do Japi, German Park";
		} else if ("Oeste".equalsIgnoreCase(regiao)) {
			return "Terminal Alvinegro, Av. Faria Lima, R. Teodoro Sampaio, R. Cardeal Arcoverde, Laranjeiras, R. Artur de Azevedo, R. dos Pinheiros, Bosque Castelo, R. Fradique Coutinho, Av. Sumaré, R. Oscar Freire, Akron";
		} else {
			return "Nenhuma informação disponível para essa região.";
		}
	}	
}
