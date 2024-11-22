from flask import Flask, render_template, request
import modelo_ia

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/processar", methods=["POST"])
def processar():
    dados = {
        "sexo": request.form.get("sexo"),
        "idade": request.form.get("idade"),
        "peso": request.form.get("peso"),
        "pressao_sistolica": request.form.get("pressao_sistolica"),
        "pressao_diastolica": request.form.get("pressao_diastolica"),
        "glicose": request.form.get("glicose"),
        "colesterol_total": request.form.get("colesterol_total"),
        "colesterol_hdl": request.form.get("colesterol_hdl"),
        "colesterol_ldl": request.form.get("colesterol_ldl"),
        "triglicerideos": request.form.get("triglicerideos"),
        "hemoglobina": request.form.get("hemoglobina"),
        "proteina_urinaria": request.form.get("proteina_urinaria"),
        "creatinina_serica": request.form.get("creatinina_serica"),
        "ast": request.form.get("ast"),
        "alt": request.form.get("alt"),
        "gama_gt": request.form.get("gama_gt"),
        "estado_fumante": request.form.get("estado_fumante"),
        "bebedor_ou_nao": request.form.get("bebedor_ou_nao"),
    }
    
    resultado = modelo_ia.processar_dados(dados)
    return render_template("resultado.html", resultado=resultado)

if __name__ == "__main__":
    app.run(debug=True)
