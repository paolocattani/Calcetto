(this.webpackJsonpcalcetto=this.webpackJsonpcalcetto||[]).push([[195],{1142:function(e,s){},1144:function(e,s){},1153:function(e){e.exports=JSON.parse('{"openapi":"3.0.0","info":{"title":"Calcetto API","description":"<strong><i>API definitions for Calcetto API server</i></strong>","version":"1.0.0"},"servers":[{"url":"http://localhost:5001/api/v2/","description":"Development server."}],"paths":{"/auth":{"get":{"summary":"Check if user is already logged.","responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationReponse"}}}},"401":{"$ref":"#/components/responses/Unauthorized"},"500":{"$ref":"#/components/responses/ServerError"}}},"delete":{"summary":"Delete user","responses":{"200":{"description":"Success","content":{"application/json":{"schema":{"$ref":"#/components/schemas/AuthenticationReponse"}}}},"400":{"description":"User not found for provided data or invalid credentials\\n","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ResponseInfo"}}}},"401":{"$ref":"#/components/responses/Unauthorized"},"500":{"$ref":"#/components/responses/ServerError"}}}}},"components":{"schemas":{"ResponseInfo":{"type":"object","required":["code","message"],"properties":{"code":{"type":"string","description":"HTTPStatusCode"},"message":{"type":"string"},"userMessage":{"$ref":"#/components/schemas/UserMessage"}}},"UserMessage":{"type":"object","required":["type","message"],"properties":{"type":{"type":"string","enum":["danger","warning","success"]},"message":{"type":"string"}}},"AuthenticationReponse":{"allOf":[{"$ref":"#/components/schemas/ResponseInfo"},{"type":"object","properties":{"user":{"$ref":"#/components/schemas/UserDTO"}}}]},"UserDTO":{"type":"object","required":["id","username","name","surname","email","phone","role","birthday","label"],"properties":{"id":{"type":"integer"},"username":{"type":"string"},"name":{"type":"string"},"surname":{"type":"string"},"email":{"type":"string"},"phone":{"type":"string"},"role":{"$ref":"#/components/schemas/UserRole"},"birthday":{"type":"string","description":"It\'s a javascript Date object"},"label":{"type":"string"},"player":{"$ref":"#/components/schemas/PlayerDTO"}}},"UserRole":{"type":"string","enum":["Admin","User"]},"PlayerDTO":{"type":"object","required":["id","name","surname","alias","label","role","email","phone","editable","rowNumber"],"properties":{"id":{"type":"integer"},"name":{"type":"string"},"surname":{"type":"string"},"alias":{"type":"string"},"label":{"type":"string"},"role":{"$ref":"#/components/schemas/PlayerRole"},"email":{"type":"string"},"phone":{"type":"string"},"userId":{"type":"string","description":"Reference to UserDTO\\n"},"match_played":{"type":"integer"},"match_won":{"type":"integer"},"total_score":{"type":"integer"},"editable":{"type":"boolean","description":"Indicates if player can be deleted.\\nA player can be deleted if is not part of any pairs. ( see PairDTO )\\n"},"rowNumber":{"type":"integer","description":"Used by FE to show row number on table"}}},"PlayerRole":{"type":"string","enum":["Non sono un giocatore","Portiere","Master","Attaccante"]}},"responses":{"Unauthorized":{"description":"Unauthorized","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ResponseInfo"}}}},"ServerError":{"description":"Unexpected server error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/ResponseInfo"}}}}},"parameters":{"offsetParam":{"name":"offset","in":"query","description":"Number of items to skip before returning the results.","required":false,"schema":{"type":"integer","format":"int32","minimum":0,"default":0}}}}}')},1154:function(e,s,t){},1218:function(e,s,t){"use strict";t.r(s);var n=t(0),r=t.n(n),o=t(476),i=(t(1152),t(1153));t(1154);s.default=function(){return r.a.createElement(o.a,{spec:i})}}}]);
//# sourceMappingURL=195.23d18cb7.chunk.js.map