declare namespace ts {
    interface MapLike<T> {
        [index: string]: T;
    }
    interface Map<T> extends MapLike<T> {
        __mapBrand: any;
    }
    type Path = string & {
        __pathBrand: any;
    };
    interface FileMap<T> {
        get(fileName: Path): T;
        set(fileName: Path, value: T): void;
        contains(fileName: Path): boolean;
        remove(fileName: Path): void;
        forEachValue(f: (key: Path, v: T) => void): void;
        getKeys(): Path[];
        clear(): void;
    }
    interface TextRange {
        pos: number;
        end: number;
    }
    enum SyntaxKind {
        Unknown = 0,
        EndOfFileToken = 1,
        SingleLineCommentTrivia = 2,
        MultiLineCommentTrivia = 3,
        NewLineTrivia = 4,
        WhitespaceTrivia = 5,
        ShebangTrivia = 6,
        ConflictMarkerTrivia = 7,
        NumericLiteral = 8,
        StringLiteral = 9,
        JsxText = 10,
        RegularExpressionLiteral = 11,
        NoSubstitutionTemplateLiteral = 12,
        TemplateHead = 13,
        TemplateMiddle = 14,
        TemplateTail = 15,
        OpenBraceToken = 16,
        CloseBraceToken = 17,
        OpenParenToken = 18,
        CloseParenToken = 19,
        OpenBracketToken = 20,
        CloseBracketToken = 21,
        DotToken = 22,
        DotDotDotToken = 23,
        SemicolonToken = 24,
        CommaToken = 25,
        LessThanToken = 26,
        LessThanSlashToken = 27,
        GreaterThanToken = 28,
        LessThanEqualsToken = 29,
        GreaterThanEqualsToken = 30,
        EqualsEqualsToken = 31,
        ExclamationEqualsToken = 32,
        EqualsEqualsEqualsToken = 33,
        ExclamationEqualsEqualsToken = 34,
        EqualsGreaterThanToken = 35,
        PlusToken = 36,
        MinusToken = 37,
        AsteriskToken = 38,
        AsteriskAsteriskToken = 39,
        SlashToken = 40,
        PercentToken = 41,
        PlusPlusToken = 42,
        MinusMinusToken = 43,
        LessThanLessThanToken = 44,
        GreaterThanGreaterThanToken = 45,
        GreaterThanGreaterThanGreaterThanToken = 46,
        AmpersandToken = 47,
        BarToken = 48,
        CaretToken = 49,
        ExclamationToken = 50,
        TildeToken = 51,
        AmpersandAmpersandToken = 52,
        BarBarToken = 53,
        QuestionToken = 54,
        ColonToken = 55,
        AtToken = 56,
        EqualsToken = 57,
        PlusEqualsToken = 58,
        MinusEqualsToken = 59,
        AsteriskEqualsToken = 60,
        AsteriskAsteriskEqualsToken = 61,
        SlashEqualsToken = 62,
        PercentEqualsToken = 63,
        LessThanLessThanEqualsToken = 64,
        GreaterThanGreaterThanEqualsToken = 65,
        GreaterThanGreaterThanGreaterThanEqualsToken = 66,
        AmpersandEqualsToken = 67,
        BarEqualsToken = 68,
        CaretEqualsToken = 69,
        Identifier = 70,
        BreakKeyword = 71,
        CaseKeyword = 72,
        CatchKeyword = 73,
        ClassKeyword = 74,
        ConstKeyword = 75,
        ContinueKeyword = 76,
        DebuggerKeyword = 77,
        DefaultKeyword = 78,
        DeleteKeyword = 79,
        DoKeyword = 80,
        ElseKeyword = 81,
        EnumKeyword = 82,
        ExportKeyword = 83,
        ExtendsKeyword = 84,
        FalseKeyword = 85,
        FinallyKeyword = 86,
        ForKeyword = 87,
        FunctionKeyword = 88,
        IfKeyword = 89,
        ImportKeyword = 90,
        InKeyword = 91,
        InstanceOfKeyword = 92,
        NewKeyword = 93,
        NullKeyword = 94,
        ReturnKeyword = 95,
        SuperKeyword = 96,
        SwitchKeyword = 97,
        ThisKeyword = 98,
        ThrowKeyword = 99,
        TrueKeyword = 100,
        TryKeyword = 101,
        TypeOfKeyword = 102,
        VarKeyword = 103,
        VoidKeyword = 104,
        WhileKeyword = 105,
        WithKeyword = 106,
        ImplementsKeyword = 107,
        InterfaceKeyword = 108,
        LetKeyword = 109,
        PackageKeyword = 110,
        PrivateKeyword = 111,
        ProtectedKeyword = 112,
        PublicKeyword = 113,
        StaticKeyword = 114,
        YieldKeyword = 115,
        AbstractKeyword = 116,
        AsKeyword = 117,
        AnyKeyword = 118,
        AsyncKeyword = 119,
        AwaitKeyword = 120,
        BooleanKeyword = 121,
        ConstructorKeyword = 122,
        DeclareKeyword = 123,
        GetKeyword = 124,
        IsKeyword = 125,
        KeyOfKeyword = 126,
        ModuleKeyword = 127,
        NamespaceKeyword = 128,
        NeverKeyword = 129,
        ReadonlyKeyword = 130,
        RequireKeyword = 131,
        NumberKeyword = 132,
        SetKeyword = 133,
        StringKeyword = 134,
        SymbolKeyword = 135,
        TypeKeyword = 136,
        UndefinedKeyword = 137,
        FromKeyword = 138,
        GlobalKeyword = 139,
        OfKeyword = 140,
        QualifiedName = 141,
        ComputedPropertyName = 142,
        TypeParameter = 143,
        Parameter = 144,
        Decorator = 145,
        PropertySignature = 146,
        PropertyDeclaration = 147,
        MethodSignature = 148,
        MethodDeclaration = 149,
        Constructor = 150,
        GetAccessor = 151,
        SetAccessor = 152,
        CallSignature = 153,
        ConstructSignature = 154,
        IndexSignature = 155,
        TypePredicate = 156,
        TypeReference = 157,
        FunctionType = 158,
        ConstructorType = 159,
        TypeQuery = 160,
        TypeLiteral = 161,
        ArrayType = 162,
        TupleType = 163,
        UnionType = 164,
        IntersectionType = 165,
        ParenthesizedType = 166,
        ThisType = 167,
        TypeOperator = 168,
        IndexedAccessType = 169,
        MappedType = 170,
        LiteralType = 171,
        ObjectBindingPattern = 172,
        ArrayBindingPattern = 173,
        BindingElement = 174,
        ArrayLiteralExpression = 175,
        ObjectLiteralExpression = 176,
        PropertyAccessExpression = 177,
        ElementAccessExpression = 178,
        CallExpression = 179,
        NewExpression = 180,
        TaggedTemplateExpression = 181,
        TypeAssertionExpression = 182,
        ParenthesizedExpression = 183,
        FunctionExpression = 184,
        ArrowFunction = 185,
        DeleteExpression = 186,
        TypeOfExpression = 187,
        VoidExpression = 188,
        AwaitExpression = 189,
        PrefixUnaryExpression = 190,
        PostfixUnaryExpression = 191,
        BinaryExpression = 192,
        ConditionalExpression = 193,
        TemplateExpression = 194,
        YieldExpression = 195,
        SpreadElement = 196,
        ClassExpression = 197,
        OmittedExpression = 198,
        ExpressionWithTypeArguments = 199,
        AsExpression = 200,
        NonNullExpression = 201,
        TemplateSpan = 202,
        SemicolonClassElement = 203,
        Block = 204,
        VariableStatement = 205,
        EmptyStatement = 206,
        ExpressionStatement = 207,
        IfStatement = 208,
        DoStatement = 209,
        WhileStatement = 210,
        ForStatement = 211,
        ForInStatement = 212,
        ForOfStatement = 213,
        ContinueStatement = 214,
        BreakStatement = 215,
        ReturnStatement = 216,
        WithStatement = 217,
        SwitchStatement = 218,
        LabeledStatement = 219,
        ThrowStatement = 220,
        TryStatement = 221,
        DebuggerStatement = 222,
        VariableDeclaration = 223,
        VariableDeclarationList = 224,
        FunctionDeclaration = 225,
        ClassDeclaration = 226,
        InterfaceDeclaration = 227,
        TypeAliasDeclaration = 228,
        EnumDeclaration = 229,
        ModuleDeclaration = 230,
        ModuleBlock = 231,
        CaseBlock = 232,
        NamespaceExportDeclaration = 233,
        ImportEqualsDeclaration = 234,
        ImportDeclaration = 235,
        ImportClause = 236,
        NamespaceImport = 237,
        NamedImports = 238,
        ImportSpecifier = 239,
        ExportAssignment = 240,
        ExportDeclaration = 241,
        NamedExports = 242,
        ExportSpecifier = 243,
        MissingDeclaration = 244,
        ExternalModuleReference = 245,
        JsxElement = 246,
        JsxSelfClosingElement = 247,
        JsxOpeningElement = 248,
        JsxClosingElement = 249,
        JsxAttribute = 250,
        JsxSpreadAttribute = 251,
        JsxExpression = 252,
        CaseClause = 253,
        DefaultClause = 254,
        HeritageClause = 255,
        CatchClause = 256,
        PropertyAssignment = 257,
        ShorthandPropertyAssignment = 258,
        SpreadAssignment = 259,
        EnumMember = 260,
        SourceFile = 261,
        JSDocTypeExpression = 262,
        JSDocAllType = 263,
        JSDocUnknownType = 264,
        JSDocArrayType = 265,
        JSDocUnionType = 266,
        JSDocTupleType = 267,
        JSDocNullableType = 268,
        JSDocNonNullableType = 269,
        JSDocRecordType = 270,
        JSDocRecordMember = 271,
        JSDocTypeReference = 272,
        JSDocOptionalType = 273,
        JSDocFunctionType = 274,
        JSDocVariadicType = 275,
        JSDocConstructorType = 276,
        JSDocThisType = 277,
        JSDocComment = 278,
        JSDocTag = 279,
        JSDocParameterTag = 280,
        JSDocReturnTag = 281,
        JSDocTypeTag = 282,
        JSDocTemplateTag = 283,
        JSDocTypedefTag = 284,
        JSDocPropertyTag = 285,
        JSDocTypeLiteral = 286,
        JSDocLiteralType = 287,
        JSDocNullKeyword = 288,
        JSDocUndefinedKeyword = 289,
        JSDocNeverKeyword = 290,
        SyntaxList = 291,
        NotEmittedStatement = 292,
        PartiallyEmittedExpression = 293,
        MergeDeclarationMarker = 294,
        EndOfDeclarationMarker = 295,
        RawExpression = 296,
        Count = 297,
        FirstAssignment = 57,
        LastAssignment = 69,
        FirstCompoundAssignment = 58,
        LastCompoundAssignment = 69,
        FirstReservedWord = 71,
        LastReservedWord = 106,
        FirstKeyword = 71,
        LastKeyword = 140,
        FirstFutureReservedWord = 107,
        LastFutureReservedWord = 115,
        FirstTypeNode = 156,
        LastTypeNode = 171,
        FirstPunctuation = 16,
        LastPunctuation = 69,
        FirstToken = 0,
        LastToken = 140,
        FirstTriviaToken = 2,
        LastTriviaToken = 7,
        FirstLiteralToken = 8,
        LastLiteralToken = 12,
        FirstTemplateToken = 12,
        LastTemplateToken = 15,
        FirstBinaryOperator = 26,
        LastBinaryOperator = 69,
        FirstNode = 141,
        FirstJSDocNode = 262,
        LastJSDocNode = 287,
        FirstJSDocTagNode = 278,
        LastJSDocTagNode = 290,
    }
    enum NodeFlags {
        None = 0,
        Let = 1,
        Const = 2,
        NestedNamespace = 4,
        Synthesized = 8,
        Namespace = 16,
        ExportContext = 32,
        ContainsThis = 64,
        HasImplicitReturn = 128,
        HasExplicitReturn = 256,
        GlobalAugmentation = 512,
        HasClassExtends = 1024,
        HasDecorators = 2048,
        HasParamDecorators = 4096,
        HasAsyncFunctions = 8192,
        HasSpreadAttribute = 16384,
        HasRestAttribute = 32768,
        DisallowInContext = 65536,
        YieldContext = 131072,
        DecoratorContext = 262144,
        AwaitContext = 524288,
        ThisNodeHasError = 1048576,
        JavaScriptFile = 2097152,
        ThisNodeOrAnySubNodesHasError = 4194304,
        HasAggregatedChildData = 8388608,
        BlockScoped = 3,
        ReachabilityCheckFlags = 384,
        EmitHelperFlags = 64512,
        ReachabilityAndEmitFlags = 64896,
        ContextFlags = 3080192,
        TypeExcludesFlags = 655360,
    }
    enum ModifierFlags {
        None = 0,
        Export = 1,
        Ambient = 2,
        Public = 4,
        Private = 8,
        Protected = 16,
        Static = 32,
        Readonly = 64,
        Abstract = 128,
        Async = 256,
        Default = 512,
        Const = 2048,
        HasComputedFlags = 536870912,
        AccessibilityModifier = 28,
        ParameterPropertyModifier = 92,
        NonPublicAccessibilityModifier = 24,
        TypeScriptModifier = 2270,
        ExportDefault = 513,
    }
    enum JsxFlags {
        None = 0,
        /** An element from a named property of the JSX.IntrinsicElements interface */
        IntrinsicNamedElement = 1,
        /** An element inferred from the string index signature of the JSX.IntrinsicElements interface */
        IntrinsicIndexedElement = 2,
        IntrinsicElement = 3,
    }
    enum RelationComparisonResult {
        Succeeded = 1,
        Failed = 2,
        FailedAndReported = 3,
    }
    interface Node extends TextRange {
        kind: SyntaxKind;
        flags: NodeFlags;
        modifierFlagsCache?: ModifierFlags;
        transformFlags?: TransformFlags;
        decorators?: NodeArray<Decorator>;
        modifiers?: ModifiersArray;
        id?: number;
        parent?: Node;
        original?: Node;
        startsOnNewLine?: boolean;
        jsDocComments?: JSDoc[];
        symbol?: Symbol;
        locals?: SymbolTable;
        nextContainer?: Node;
        localSymbol?: Symbol;
        flowNode?: FlowNode;
        emitNode?: EmitNode;
    }
    interface NodeArray<T extends Node> extends Array<T>, TextRange {
        hasTrailingComma?: boolean;
        transformFlags?: TransformFlags;
    }
    interface Token<TKind extends SyntaxKind> extends Node {
        kind: TKind;
    }
    type DotDotDotToken = Token<SyntaxKind.DotDotDotToken>;
    type QuestionToken = Token<SyntaxKind.QuestionToken>;
    type ColonToken = Token<SyntaxKind.ColonToken>;
    type EqualsToken = Token<SyntaxKind.EqualsToken>;
    type AsteriskToken = Token<SyntaxKind.AsteriskToken>;
    type EqualsGreaterThanToken = Token<SyntaxKind.EqualsGreaterThanToken>;
    type EndOfFileToken = Token<SyntaxKind.EndOfFileToken>;
    type AtToken = Token<SyntaxKind.AtToken>;
    type ReadonlyToken = Token<SyntaxKind.ReadonlyKeyword>;
    type Modifier = Token<SyntaxKind.AbstractKeyword> | Token<SyntaxKind.AsyncKeyword> | Token<SyntaxKind.ConstKeyword> | Token<SyntaxKind.DeclareKeyword> | Token<SyntaxKind.DefaultKeyword> | Token<SyntaxKind.ExportKeyword> | Token<SyntaxKind.PublicKeyword> | Token<SyntaxKind.PrivateKeyword> | Token<SyntaxKind.ProtectedKeyword> | Token<SyntaxKind.ReadonlyKeyword> | Token<SyntaxKind.StaticKeyword>;
    type ModifiersArray = NodeArray<Modifier>;
    enum GeneratedIdentifierKind {
        None = 0,
        Auto = 1,
        Loop = 2,
        Unique = 3,
        Node = 4,
    }
    interface Identifier extends PrimaryExpression {
        kind: SyntaxKind.Identifier;
        text: string;
        originalKeywordKind?: SyntaxKind;
        autoGenerateKind?: GeneratedIdentifierKind;
        autoGenerateId?: number;
        isInJSDocNamespace?: boolean;
    }
    interface TransientIdentifier extends Identifier {
        resolvedSymbol: Symbol;
    }
    interface GeneratedIdentifier extends Identifier {
        autoGenerateKind: GeneratedIdentifierKind.Auto | GeneratedIdentifierKind.Loop | GeneratedIdentifierKind.Unique | GeneratedIdentifierKind.Node;
    }
    interface QualifiedName extends Node {
        kind: SyntaxKind.QualifiedName;
        left: EntityName;
        right: Identifier;
    }
    type EntityName = Identifier | QualifiedName;
    type PropertyName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName;
    type DeclarationName = Identifier | StringLiteral | NumericLiteral | ComputedPropertyName | BindingPattern;
    interface Declaration extends Node {
        _declarationBrand: any;
        name?: DeclarationName;
    }
    interface DeclarationStatement extends Declaration, Statement {
        name?: Identifier | StringLiteral | NumericLiteral;
    }
    interface ComputedPropertyName extends Node {
        kind: SyntaxKind.ComputedPropertyName;
        expression: Expression;
    }
    interface Decorator extends Node {
        kind: SyntaxKind.Decorator;
        expression: LeftHandSideExpression;
    }
    interface TypeParameterDeclaration extends Declaration {
        kind: SyntaxKind.TypeParameter;
        name: Identifier;
        constraint?: TypeNode;
        expression?: Expression;
    }
    interface SignatureDeclaration extends Declaration {
        name?: PropertyName;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        parameters: NodeArray<ParameterDeclaration>;
        type?: TypeNode;
    }
    interface CallSignatureDeclaration extends SignatureDeclaration, TypeElement {
        kind: SyntaxKind.CallSignature;
    }
    interface ConstructSignatureDeclaration extends SignatureDeclaration, TypeElement {
        kind: SyntaxKind.ConstructSignature;
    }
    type BindingName = Identifier | BindingPattern;
    interface VariableDeclaration extends Declaration {
        kind: SyntaxKind.VariableDeclaration;
        parent?: VariableDeclarationList;
        name: BindingName;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface VariableDeclarationList extends Node {
        kind: SyntaxKind.VariableDeclarationList;
        declarations: NodeArray<VariableDeclaration>;
    }
    interface ParameterDeclaration extends Declaration {
        kind: SyntaxKind.Parameter;
        dotDotDotToken?: DotDotDotToken;
        name: BindingName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface BindingElement extends Declaration {
        kind: SyntaxKind.BindingElement;
        propertyName?: PropertyName;
        dotDotDotToken?: DotDotDotToken;
        name: BindingName;
        initializer?: Expression;
    }
    interface PropertySignature extends TypeElement {
        kind: SyntaxKind.PropertySignature | SyntaxKind.JSDocRecordMember;
        name: PropertyName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface PropertyDeclaration extends ClassElement {
        kind: SyntaxKind.PropertyDeclaration;
        questionToken?: QuestionToken;
        name: PropertyName;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface ObjectLiteralElement extends Declaration {
        _objectLiteralBrandBrand: any;
        name?: PropertyName;
    }
    type ObjectLiteralElementLike = PropertyAssignment | ShorthandPropertyAssignment | MethodDeclaration | AccessorDeclaration | SpreadAssignment;
    interface PropertyAssignment extends ObjectLiteralElement {
        kind: SyntaxKind.PropertyAssignment;
        name: PropertyName;
        questionToken?: QuestionToken;
        initializer: Expression;
    }
    interface ShorthandPropertyAssignment extends ObjectLiteralElement {
        kind: SyntaxKind.ShorthandPropertyAssignment;
        name: Identifier;
        questionToken?: QuestionToken;
        equalsToken?: Token<SyntaxKind.EqualsToken>;
        objectAssignmentInitializer?: Expression;
    }
    interface SpreadAssignment extends ObjectLiteralElement {
        kind: SyntaxKind.SpreadAssignment;
        expression: Expression;
    }
    interface VariableLikeDeclaration extends Declaration {
        propertyName?: PropertyName;
        dotDotDotToken?: DotDotDotToken;
        name: DeclarationName;
        questionToken?: QuestionToken;
        type?: TypeNode;
        initializer?: Expression;
    }
    interface PropertyLikeDeclaration extends Declaration {
        name: PropertyName;
    }
    interface ObjectBindingPattern extends Node {
        kind: SyntaxKind.ObjectBindingPattern;
        elements: NodeArray<BindingElement>;
    }
    interface ArrayBindingPattern extends Node {
        kind: SyntaxKind.ArrayBindingPattern;
        elements: NodeArray<ArrayBindingElement>;
    }
    type BindingPattern = ObjectBindingPattern | ArrayBindingPattern;
    type ArrayBindingElement = BindingElement | OmittedExpression;
    /**
     * Several node kinds share function-like features such as a signature,
     * a name, and a body. These nodes should extend FunctionLikeDeclaration.
     * Examples:
     * - FunctionDeclaration
     * - MethodDeclaration
     * - AccessorDeclaration
     */
    interface FunctionLikeDeclaration extends SignatureDeclaration {
        _functionLikeDeclarationBrand: any;
        asteriskToken?: AsteriskToken;
        questionToken?: QuestionToken;
        body?: Block | Expression;
    }
    interface FunctionDeclaration extends FunctionLikeDeclaration, DeclarationStatement {
        kind: SyntaxKind.FunctionDeclaration;
        name?: Identifier;
        body?: FunctionBody;
    }
    interface MethodSignature extends SignatureDeclaration, TypeElement {
        kind: SyntaxKind.MethodSignature;
        name: PropertyName;
    }
    interface MethodDeclaration extends FunctionLikeDeclaration, ClassElement, ObjectLiteralElement {
        kind: SyntaxKind.MethodDeclaration;
        name: PropertyName;
        body?: FunctionBody;
    }
    interface ConstructorDeclaration extends FunctionLikeDeclaration, ClassElement {
        kind: SyntaxKind.Constructor;
        body?: FunctionBody;
    }
    interface SemicolonClassElement extends ClassElement {
        kind: SyntaxKind.SemicolonClassElement;
    }
    interface GetAccessorDeclaration extends FunctionLikeDeclaration, ClassElement, ObjectLiteralElement {
        kind: SyntaxKind.GetAccessor;
        name: PropertyName;
        body: FunctionBody;
    }
    interface SetAccessorDeclaration extends FunctionLikeDeclaration, ClassElement, ObjectLiteralElement {
        kind: SyntaxKind.SetAccessor;
        name: PropertyName;
        body: FunctionBody;
    }
    type AccessorDeclaration = GetAccessorDeclaration | SetAccessorDeclaration;
    interface IndexSignatureDeclaration extends SignatureDeclaration, ClassElement, TypeElement {
        kind: SyntaxKind.IndexSignature;
    }
    interface TypeNode extends Node {
        _typeNodeBrand: any;
    }
    interface KeywordTypeNode extends TypeNode {
        kind: SyntaxKind.AnyKeyword | SyntaxKind.NumberKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.StringKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.VoidKeyword;
    }
    interface ThisTypeNode extends TypeNode {
        kind: SyntaxKind.ThisType;
    }
    interface FunctionOrConstructorTypeNode extends TypeNode, SignatureDeclaration {
        kind: SyntaxKind.FunctionType | SyntaxKind.ConstructorType;
    }
    interface FunctionTypeNode extends FunctionOrConstructorTypeNode {
        kind: SyntaxKind.FunctionType;
    }
    interface ConstructorTypeNode extends FunctionOrConstructorTypeNode {
        kind: SyntaxKind.ConstructorType;
    }
    interface TypeReferenceNode extends TypeNode {
        kind: SyntaxKind.TypeReference;
        typeName: EntityName;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface TypePredicateNode extends TypeNode {
        kind: SyntaxKind.TypePredicate;
        parameterName: Identifier | ThisTypeNode;
        type: TypeNode;
    }
    interface TypeQueryNode extends TypeNode {
        kind: SyntaxKind.TypeQuery;
        exprName: EntityName;
    }
    interface TypeLiteralNode extends TypeNode, Declaration {
        kind: SyntaxKind.TypeLiteral;
        members: NodeArray<TypeElement>;
    }
    interface ArrayTypeNode extends TypeNode {
        kind: SyntaxKind.ArrayType;
        elementType: TypeNode;
    }
    interface TupleTypeNode extends TypeNode {
        kind: SyntaxKind.TupleType;
        elementTypes: NodeArray<TypeNode>;
    }
    interface UnionOrIntersectionTypeNode extends TypeNode {
        kind: SyntaxKind.UnionType | SyntaxKind.IntersectionType;
        types: NodeArray<TypeNode>;
    }
    interface UnionTypeNode extends UnionOrIntersectionTypeNode {
        kind: SyntaxKind.UnionType;
    }
    interface IntersectionTypeNode extends UnionOrIntersectionTypeNode {
        kind: SyntaxKind.IntersectionType;
    }
    interface ParenthesizedTypeNode extends TypeNode {
        kind: SyntaxKind.ParenthesizedType;
        type: TypeNode;
    }
    interface TypeOperatorNode extends TypeNode {
        kind: SyntaxKind.TypeOperator;
        operator: SyntaxKind.KeyOfKeyword;
        type: TypeNode;
    }
    interface IndexedAccessTypeNode extends TypeNode {
        kind: SyntaxKind.IndexedAccessType;
        objectType: TypeNode;
        indexType: TypeNode;
    }
    interface MappedTypeNode extends TypeNode, Declaration {
        kind: SyntaxKind.MappedType;
        readonlyToken?: ReadonlyToken;
        typeParameter: TypeParameterDeclaration;
        questionToken?: QuestionToken;
        type?: TypeNode;
    }
    interface LiteralTypeNode extends TypeNode {
        kind: SyntaxKind.LiteralType;
        literal: Expression;
    }
    interface StringLiteral extends LiteralExpression {
        kind: SyntaxKind.StringLiteral;
        textSourceNode?: Identifier | StringLiteral | NumericLiteral;
    }
    interface Expression extends Node {
        _expressionBrand: any;
        contextualType?: Type;
    }
    interface OmittedExpression extends Expression {
        kind: SyntaxKind.OmittedExpression;
    }
    interface PartiallyEmittedExpression extends LeftHandSideExpression {
        kind: SyntaxKind.PartiallyEmittedExpression;
        expression: Expression;
    }
    interface UnaryExpression extends Expression {
        _unaryExpressionBrand: any;
    }
    interface IncrementExpression extends UnaryExpression {
        _incrementExpressionBrand: any;
    }
    type PrefixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken | SyntaxKind.PlusToken | SyntaxKind.MinusToken | SyntaxKind.TildeToken | SyntaxKind.ExclamationToken;
    interface PrefixUnaryExpression extends IncrementExpression {
        kind: SyntaxKind.PrefixUnaryExpression;
        operator: PrefixUnaryOperator;
        operand: UnaryExpression;
    }
    type PostfixUnaryOperator = SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken;
    interface PostfixUnaryExpression extends IncrementExpression {
        kind: SyntaxKind.PostfixUnaryExpression;
        operand: LeftHandSideExpression;
        operator: PostfixUnaryOperator;
    }
    interface LeftHandSideExpression extends IncrementExpression {
        _leftHandSideExpressionBrand: any;
    }
    interface MemberExpression extends LeftHandSideExpression {
        _memberExpressionBrand: any;
    }
    interface PrimaryExpression extends MemberExpression {
        _primaryExpressionBrand: any;
    }
    interface NullLiteral extends PrimaryExpression {
        kind: SyntaxKind.NullKeyword;
    }
    interface BooleanLiteral extends PrimaryExpression {
        kind: SyntaxKind.TrueKeyword | SyntaxKind.FalseKeyword;
    }
    interface ThisExpression extends PrimaryExpression {
        kind: SyntaxKind.ThisKeyword;
    }
    interface SuperExpression extends PrimaryExpression {
        kind: SyntaxKind.SuperKeyword;
    }
    interface DeleteExpression extends UnaryExpression {
        kind: SyntaxKind.DeleteExpression;
        expression: UnaryExpression;
    }
    interface TypeOfExpression extends UnaryExpression {
        kind: SyntaxKind.TypeOfExpression;
        expression: UnaryExpression;
    }
    interface VoidExpression extends UnaryExpression {
        kind: SyntaxKind.VoidExpression;
        expression: UnaryExpression;
    }
    interface AwaitExpression extends UnaryExpression {
        kind: SyntaxKind.AwaitExpression;
        expression: UnaryExpression;
    }
    interface YieldExpression extends Expression {
        kind: SyntaxKind.YieldExpression;
        asteriskToken?: AsteriskToken;
        expression?: Expression;
    }
    type ExponentiationOperator = SyntaxKind.AsteriskAsteriskToken;
    type MultiplicativeOperator = SyntaxKind.AsteriskToken | SyntaxKind.SlashToken | SyntaxKind.PercentToken;
    type MultiplicativeOperatorOrHigher = ExponentiationOperator | MultiplicativeOperator;
    type AdditiveOperator = SyntaxKind.PlusToken | SyntaxKind.MinusToken;
    type AdditiveOperatorOrHigher = MultiplicativeOperatorOrHigher | AdditiveOperator;
    type ShiftOperator = SyntaxKind.LessThanLessThanToken | SyntaxKind.GreaterThanGreaterThanToken | SyntaxKind.GreaterThanGreaterThanGreaterThanToken;
    type ShiftOperatorOrHigher = AdditiveOperatorOrHigher | ShiftOperator;
    type RelationalOperator = SyntaxKind.LessThanToken | SyntaxKind.LessThanEqualsToken | SyntaxKind.GreaterThanToken | SyntaxKind.GreaterThanEqualsToken | SyntaxKind.InstanceOfKeyword | SyntaxKind.InKeyword;
    type RelationalOperatorOrHigher = ShiftOperatorOrHigher | RelationalOperator;
    type EqualityOperator = SyntaxKind.EqualsEqualsToken | SyntaxKind.EqualsEqualsEqualsToken | SyntaxKind.ExclamationEqualsEqualsToken | SyntaxKind.ExclamationEqualsToken;
    type EqualityOperatorOrHigher = RelationalOperatorOrHigher | EqualityOperator;
    type BitwiseOperator = SyntaxKind.AmpersandToken | SyntaxKind.BarToken | SyntaxKind.CaretToken;
    type BitwiseOperatorOrHigher = EqualityOperatorOrHigher | BitwiseOperator;
    type LogicalOperator = SyntaxKind.AmpersandAmpersandToken | SyntaxKind.BarBarToken;
    type LogicalOperatorOrHigher = BitwiseOperatorOrHigher | LogicalOperator;
    type CompoundAssignmentOperator = SyntaxKind.PlusEqualsToken | SyntaxKind.MinusEqualsToken | SyntaxKind.AsteriskAsteriskEqualsToken | SyntaxKind.AsteriskEqualsToken | SyntaxKind.SlashEqualsToken | SyntaxKind.PercentEqualsToken | SyntaxKind.AmpersandEqualsToken | SyntaxKind.BarEqualsToken | SyntaxKind.CaretEqualsToken | SyntaxKind.LessThanLessThanEqualsToken | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken | SyntaxKind.GreaterThanGreaterThanEqualsToken;
    type AssignmentOperator = SyntaxKind.EqualsToken | CompoundAssignmentOperator;
    type AssignmentOperatorOrHigher = LogicalOperatorOrHigher | AssignmentOperator;
    type BinaryOperator = AssignmentOperatorOrHigher | SyntaxKind.CommaToken;
    type BinaryOperatorToken = Token<BinaryOperator>;
    interface BinaryExpression extends Expression, Declaration {
        kind: SyntaxKind.BinaryExpression;
        left: Expression;
        operatorToken: BinaryOperatorToken;
        right: Expression;
    }
    type AssignmentOperatorToken = Token<AssignmentOperator>;
    interface AssignmentExpression<TOperator extends AssignmentOperatorToken> extends BinaryExpression {
        left: LeftHandSideExpression;
        operatorToken: TOperator;
    }
    interface ObjectDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        left: ObjectLiteralExpression;
    }
    interface ArrayDestructuringAssignment extends AssignmentExpression<EqualsToken> {
        left: ArrayLiteralExpression;
    }
    type DestructuringAssignment = ObjectDestructuringAssignment | ArrayDestructuringAssignment;
    type BindingOrAssignmentElement = VariableDeclaration | ParameterDeclaration | BindingElement | PropertyAssignment | ShorthandPropertyAssignment | SpreadAssignment | OmittedExpression | SpreadElement | ArrayLiteralExpression | ObjectLiteralExpression | AssignmentExpression<EqualsToken> | Identifier | PropertyAccessExpression | ElementAccessExpression;
    type BindingOrAssignmentElementRestIndicator = DotDotDotToken | SpreadElement | SpreadAssignment;
    type BindingOrAssignmentElementTarget = BindingOrAssignmentPattern | Expression;
    type ObjectBindingOrAssignmentPattern = ObjectBindingPattern | ObjectLiteralExpression;
    type ArrayBindingOrAssignmentPattern = ArrayBindingPattern | ArrayLiteralExpression;
    type AssignmentPattern = ObjectLiteralExpression | ArrayLiteralExpression;
    type BindingOrAssignmentPattern = ObjectBindingOrAssignmentPattern | ArrayBindingOrAssignmentPattern;
    interface ConditionalExpression extends Expression {
        kind: SyntaxKind.ConditionalExpression;
        condition: Expression;
        questionToken: QuestionToken;
        whenTrue: Expression;
        colonToken: ColonToken;
        whenFalse: Expression;
    }
    type FunctionBody = Block;
    type ConciseBody = FunctionBody | Expression;
    interface FunctionExpression extends PrimaryExpression, FunctionLikeDeclaration {
        kind: SyntaxKind.FunctionExpression;
        name?: Identifier;
        body: FunctionBody;
    }
    interface ArrowFunction extends Expression, FunctionLikeDeclaration {
        kind: SyntaxKind.ArrowFunction;
        equalsGreaterThanToken: EqualsGreaterThanToken;
        body: ConciseBody;
    }
    interface LiteralLikeNode extends Node {
        text: string;
        isUnterminated?: boolean;
        hasExtendedUnicodeEscape?: boolean;
        isOctalLiteral?: boolean;
    }
    interface LiteralExpression extends LiteralLikeNode, PrimaryExpression {
        _literalExpressionBrand: any;
    }
    interface RegularExpressionLiteral extends LiteralExpression {
        kind: SyntaxKind.RegularExpressionLiteral;
    }
    interface NoSubstitutionTemplateLiteral extends LiteralExpression {
        kind: SyntaxKind.NoSubstitutionTemplateLiteral;
    }
    interface NumericLiteral extends LiteralExpression {
        kind: SyntaxKind.NumericLiteral;
        trailingComment?: string;
    }
    interface TemplateHead extends LiteralLikeNode {
        kind: SyntaxKind.TemplateHead;
    }
    interface TemplateMiddle extends LiteralLikeNode {
        kind: SyntaxKind.TemplateMiddle;
    }
    interface TemplateTail extends LiteralLikeNode {
        kind: SyntaxKind.TemplateTail;
    }
    type TemplateLiteral = TemplateExpression | NoSubstitutionTemplateLiteral;
    interface TemplateExpression extends PrimaryExpression {
        kind: SyntaxKind.TemplateExpression;
        head: TemplateHead;
        templateSpans: NodeArray<TemplateSpan>;
    }
    interface TemplateSpan extends Node {
        kind: SyntaxKind.TemplateSpan;
        expression: Expression;
        literal: TemplateMiddle | TemplateTail;
    }
    interface ParenthesizedExpression extends PrimaryExpression {
        kind: SyntaxKind.ParenthesizedExpression;
        expression: Expression;
    }
    interface ArrayLiteralExpression extends PrimaryExpression {
        kind: SyntaxKind.ArrayLiteralExpression;
        elements: NodeArray<Expression>;
        multiLine?: boolean;
    }
    interface SpreadElement extends Expression {
        kind: SyntaxKind.SpreadElement;
        expression: Expression;
    }
    /**
      * This interface is a base interface for ObjectLiteralExpression and JSXAttributes to extend from. JSXAttributes is similar to
      * ObjectLiteralExpression in that it contains array of properties; however, JSXAttributes' properties can only be
      * JSXAttribute or JSXSpreadAttribute. ObjectLiteralExpression, on the other hand, can only have properties of type
      * ObjectLiteralElement (e.g. PropertyAssignment, ShorthandPropertyAssignment etc.)
     **/
    interface ObjectLiteralExpressionBase<T extends ObjectLiteralElement> extends PrimaryExpression, Declaration {
        properties: NodeArray<T>;
    }
    interface ObjectLiteralExpression extends ObjectLiteralExpressionBase<ObjectLiteralElementLike> {
        kind: SyntaxKind.ObjectLiteralExpression;
        multiLine?: boolean;
    }
    type EntityNameExpression = Identifier | PropertyAccessEntityNameExpression;
    type EntityNameOrEntityNameExpression = EntityName | EntityNameExpression;
    interface PropertyAccessExpression extends MemberExpression, Declaration {
        kind: SyntaxKind.PropertyAccessExpression;
        expression: LeftHandSideExpression;
        name: Identifier;
    }
    interface SuperPropertyAccessExpression extends PropertyAccessExpression {
        expression: SuperExpression;
    }
    /** Brand for a PropertyAccessExpression which, like a QualifiedName, consists of a sequence of identifiers separated by dots. */
    interface PropertyAccessEntityNameExpression extends PropertyAccessExpression {
        _propertyAccessExpressionLikeQualifiedNameBrand?: any;
        expression: EntityNameExpression;
    }
    interface ElementAccessExpression extends MemberExpression {
        kind: SyntaxKind.ElementAccessExpression;
        expression: LeftHandSideExpression;
        argumentExpression?: Expression;
    }
    interface SuperElementAccessExpression extends ElementAccessExpression {
        expression: SuperExpression;
    }
    type SuperProperty = SuperPropertyAccessExpression | SuperElementAccessExpression;
    interface CallExpression extends LeftHandSideExpression, Declaration {
        kind: SyntaxKind.CallExpression;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }
    interface SuperCall extends CallExpression {
        expression: SuperExpression;
    }
    interface ExpressionWithTypeArguments extends TypeNode {
        kind: SyntaxKind.ExpressionWithTypeArguments;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
    }
    interface NewExpression extends PrimaryExpression, Declaration {
        kind: SyntaxKind.NewExpression;
        expression: LeftHandSideExpression;
        typeArguments?: NodeArray<TypeNode>;
        arguments: NodeArray<Expression>;
    }
    interface TaggedTemplateExpression extends MemberExpression {
        kind: SyntaxKind.TaggedTemplateExpression;
        tag: LeftHandSideExpression;
        template: TemplateLiteral;
    }
    type CallLikeExpression = CallExpression | NewExpression | TaggedTemplateExpression | Decorator;
    interface AsExpression extends Expression {
        kind: SyntaxKind.AsExpression;
        expression: Expression;
        type: TypeNode;
    }
    interface TypeAssertion extends UnaryExpression {
        kind: SyntaxKind.TypeAssertionExpression;
        type: TypeNode;
        expression: UnaryExpression;
    }
    type AssertionExpression = TypeAssertion | AsExpression;
    interface NonNullExpression extends LeftHandSideExpression {
        kind: SyntaxKind.NonNullExpression;
        expression: Expression;
    }
    interface JsxElement extends PrimaryExpression {
        kind: SyntaxKind.JsxElement;
        openingElement: JsxOpeningElement;
        children: NodeArray<JsxChild>;
        closingElement: JsxClosingElement;
    }
    type JsxTagNameExpression = PrimaryExpression | PropertyAccessExpression;
    interface JsxOpeningElement extends Expression {
        kind: SyntaxKind.JsxOpeningElement;
        tagName: JsxTagNameExpression;
        attributes: NodeArray<JsxAttribute | JsxSpreadAttribute>;
    }
    interface JsxSelfClosingElement extends PrimaryExpression {
        kind: SyntaxKind.JsxSelfClosingElement;
        tagName: JsxTagNameExpression;
        attributes: NodeArray<JsxAttribute | JsxSpreadAttribute>;
    }
    type JsxOpeningLikeElement = JsxSelfClosingElement | JsxOpeningElement;
    type JsxAttributeLike = JsxAttribute | JsxSpreadAttribute;
    interface JsxAttribute extends Node {
        kind: SyntaxKind.JsxAttribute;
        name: Identifier;
        initializer?: StringLiteral | JsxExpression;
    }
    interface JsxSpreadAttribute extends Node {
        kind: SyntaxKind.JsxSpreadAttribute;
        expression: Expression;
    }
    interface JsxClosingElement extends Node {
        kind: SyntaxKind.JsxClosingElement;
        tagName: JsxTagNameExpression;
    }
    interface JsxExpression extends Expression {
        kind: SyntaxKind.JsxExpression;
        expression?: Expression;
    }
    interface JsxText extends Node {
        kind: SyntaxKind.JsxText;
    }
    type JsxChild = JsxText | JsxExpression | JsxElement | JsxSelfClosingElement;
    interface Statement extends Node {
        _statementBrand: any;
    }
    interface NotEmittedStatement extends Statement {
        kind: SyntaxKind.NotEmittedStatement;
    }
    /**
     * Marks the end of transformed declaration to properly emit exports.
     */
    interface EndOfDeclarationMarker extends Statement {
        kind: SyntaxKind.EndOfDeclarationMarker;
    }
    /**
     * Emits a string of raw text in an expression position. Raw text is never transformed, should
     * be ES3 compliant, and should have the same precedence as PrimaryExpression.
     */
    interface RawExpression extends PrimaryExpression {
        kind: SyntaxKind.RawExpression;
        text: string;
    }
    /**
     * Marks the beginning of a merged transformed declaration.
     */
    interface MergeDeclarationMarker extends Statement {
        kind: SyntaxKind.MergeDeclarationMarker;
    }
    interface EmptyStatement extends Statement {
        kind: SyntaxKind.EmptyStatement;
    }
    interface DebuggerStatement extends Statement {
        kind: SyntaxKind.DebuggerStatement;
    }
    interface MissingDeclaration extends DeclarationStatement, ClassElement, ObjectLiteralElement, TypeElement {
        kind: SyntaxKind.MissingDeclaration;
        name?: Identifier;
    }
    type BlockLike = SourceFile | Block | ModuleBlock | CaseClause;
    interface Block extends Statement {
        kind: SyntaxKind.Block;
        statements: NodeArray<Statement>;
        multiLine?: boolean;
    }
    interface VariableStatement extends Statement {
        kind: SyntaxKind.VariableStatement;
        declarationList: VariableDeclarationList;
    }
    interface ExpressionStatement extends Statement {
        kind: SyntaxKind.ExpressionStatement;
        expression: Expression;
    }
    interface PrologueDirective extends ExpressionStatement {
        expression: StringLiteral;
    }
    interface IfStatement extends Statement {
        kind: SyntaxKind.IfStatement;
        expression: Expression;
        thenStatement: Statement;
        elseStatement?: Statement;
    }
    interface IterationStatement extends Statement {
        statement: Statement;
    }
    interface DoStatement extends IterationStatement {
        kind: SyntaxKind.DoStatement;
        expression: Expression;
    }
    interface WhileStatement extends IterationStatement {
        kind: SyntaxKind.WhileStatement;
        expression: Expression;
    }
    type ForInitializer = VariableDeclarationList | Expression;
    interface ForStatement extends IterationStatement {
        kind: SyntaxKind.ForStatement;
        initializer?: ForInitializer;
        condition?: Expression;
        incrementor?: Expression;
    }
    interface ForInStatement extends IterationStatement {
        kind: SyntaxKind.ForInStatement;
        initializer: ForInitializer;
        expression: Expression;
    }
    interface ForOfStatement extends IterationStatement {
        kind: SyntaxKind.ForOfStatement;
        initializer: ForInitializer;
        expression: Expression;
    }
    interface BreakStatement extends Statement {
        kind: SyntaxKind.BreakStatement;
        label?: Identifier;
    }
    interface ContinueStatement extends Statement {
        kind: SyntaxKind.ContinueStatement;
        label?: Identifier;
    }
    type BreakOrContinueStatement = BreakStatement | ContinueStatement;
    interface ReturnStatement extends Statement {
        kind: SyntaxKind.ReturnStatement;
        expression?: Expression;
    }
    interface WithStatement extends Statement {
        kind: SyntaxKind.WithStatement;
        expression: Expression;
        statement: Statement;
    }
    interface SwitchStatement extends Statement {
        kind: SyntaxKind.SwitchStatement;
        expression: Expression;
        caseBlock: CaseBlock;
        possiblyExhaustive?: boolean;
    }
    interface CaseBlock extends Node {
        kind: SyntaxKind.CaseBlock;
        clauses: NodeArray<CaseOrDefaultClause>;
    }
    interface CaseClause extends Node {
        kind: SyntaxKind.CaseClause;
        expression: Expression;
        statements: NodeArray<Statement>;
    }
    interface DefaultClause extends Node {
        kind: SyntaxKind.DefaultClause;
        statements: NodeArray<Statement>;
    }
    type CaseOrDefaultClause = CaseClause | DefaultClause;
    interface LabeledStatement extends Statement {
        kind: SyntaxKind.LabeledStatement;
        label: Identifier;
        statement: Statement;
    }
    interface ThrowStatement extends Statement {
        kind: SyntaxKind.ThrowStatement;
        expression: Expression;
    }
    interface TryStatement extends Statement {
        kind: SyntaxKind.TryStatement;
        tryBlock: Block;
        catchClause?: CatchClause;
        finallyBlock?: Block;
    }
    interface CatchClause extends Node {
        kind: SyntaxKind.CatchClause;
        variableDeclaration: VariableDeclaration;
        block: Block;
    }
    type DeclarationWithTypeParameters = SignatureDeclaration | ClassLikeDeclaration | InterfaceDeclaration | TypeAliasDeclaration;
    interface ClassLikeDeclaration extends Declaration {
        name?: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<ClassElement>;
    }
    interface ClassDeclaration extends ClassLikeDeclaration, DeclarationStatement {
        kind: SyntaxKind.ClassDeclaration;
        name?: Identifier;
    }
    interface ClassExpression extends ClassLikeDeclaration, PrimaryExpression {
        kind: SyntaxKind.ClassExpression;
    }
    interface ClassElement extends Declaration {
        _classElementBrand: any;
        name?: PropertyName;
    }
    interface TypeElement extends Declaration {
        _typeElementBrand: any;
        name?: PropertyName;
        questionToken?: QuestionToken;
    }
    interface InterfaceDeclaration extends DeclarationStatement {
        kind: SyntaxKind.InterfaceDeclaration;
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        heritageClauses?: NodeArray<HeritageClause>;
        members: NodeArray<TypeElement>;
    }
    interface HeritageClause extends Node {
        kind: SyntaxKind.HeritageClause;
        token: SyntaxKind;
        types?: NodeArray<ExpressionWithTypeArguments>;
    }
    interface TypeAliasDeclaration extends DeclarationStatement {
        kind: SyntaxKind.TypeAliasDeclaration;
        name: Identifier;
        typeParameters?: NodeArray<TypeParameterDeclaration>;
        type: TypeNode;
    }
    interface EnumMember extends Declaration {
        kind: SyntaxKind.EnumMember;
        name: PropertyName;
        initializer?: Expression;
    }
    interface EnumDeclaration extends DeclarationStatement {
        kind: SyntaxKind.EnumDeclaration;
        name: Identifier;
        members: NodeArray<EnumMember>;
    }
    type ModuleBody = ModuleBlock | ModuleDeclaration;
    type ModuleName = Identifier | StringLiteral;
    interface ModuleDeclaration extends DeclarationStatement {
        kind: SyntaxKind.ModuleDeclaration;
        name: Identifier | StringLiteral;
        body?: ModuleBlock | NamespaceDeclaration | JSDocNamespaceDeclaration | Identifier;
    }
    interface NamespaceDeclaration extends ModuleDeclaration {
        name: Identifier;
        body: ModuleBlock | NamespaceDeclaration;
    }
    interface JSDocNamespaceDeclaration extends ModuleDeclaration {
        name: Identifier;
        body: JSDocNamespaceDeclaration | Identifier;
    }
    interface ModuleBlock extends Node, Statement {
        kind: SyntaxKind.ModuleBlock;
        statements: NodeArray<Statement>;
    }
    type ModuleReference = EntityName | ExternalModuleReference;
    interface ImportEqualsDeclaration extends DeclarationStatement {
        kind: SyntaxKind.ImportEqualsDeclaration;
        name: Identifier;
        moduleReference: ModuleReference;
    }
    interface ExternalModuleReference extends Node {
        kind: SyntaxKind.ExternalModuleReference;
        expression?: Expression;
    }
    interface ImportDeclaration extends Statement {
        kind: SyntaxKind.ImportDeclaration;
        importClause?: ImportClause;
        moduleSpecifier: Expression;
    }
    type NamedImportBindings = NamespaceImport | NamedImports;
    interface ImportClause extends Declaration {
        kind: SyntaxKind.ImportClause;
        name?: Identifier;
        namedBindings?: NamedImportBindings;
    }
    interface NamespaceImport extends Declaration {
        kind: SyntaxKind.NamespaceImport;
        name: Identifier;
    }
    interface NamespaceExportDeclaration extends DeclarationStatement {
        kind: SyntaxKind.NamespaceExportDeclaration;
        name: Identifier;
        moduleReference: LiteralLikeNode;
    }
    interface ExportDeclaration extends DeclarationStatement {
        kind: SyntaxKind.ExportDeclaration;
        exportClause?: NamedExports;
        moduleSpecifier?: Expression;
    }
    interface NamedImports extends Node {
        kind: SyntaxKind.NamedImports;
        elements: NodeArray<ImportSpecifier>;
    }
    interface NamedExports extends Node {
        kind: SyntaxKind.NamedExports;
        elements: NodeArray<ExportSpecifier>;
    }
    type NamedImportsOrExports = NamedImports | NamedExports;
    interface ImportSpecifier extends Declaration {
        kind: SyntaxKind.ImportSpecifier;
        propertyName?: Identifier;
        name: Identifier;
    }
    interface ExportSpecifier extends Declaration {
        kind: SyntaxKind.ExportSpecifier;
        propertyName?: Identifier;
        name: Identifier;
    }
    type ImportOrExportSpecifier = ImportSpecifier | ExportSpecifier;
    interface ExportAssignment extends DeclarationStatement {
        kind: SyntaxKind.ExportAssignment;
        isExportEquals?: boolean;
        expression: Expression;
    }
    interface FileReference extends TextRange {
        fileName: string;
    }
    interface CommentRange extends TextRange {
        hasTrailingNewLine?: boolean;
        kind: SyntaxKind;
    }
    interface JSDocTypeExpression extends Node {
        kind: SyntaxKind.JSDocTypeExpression;
        type: JSDocType;
    }
    interface JSDocType extends TypeNode {
        _jsDocTypeBrand: any;
    }
    interface JSDocAllType extends JSDocType {
        kind: SyntaxKind.JSDocAllType;
    }
    interface JSDocUnknownType extends JSDocType {
        kind: SyntaxKind.JSDocUnknownType;
    }
    interface JSDocArrayType extends JSDocType {
        kind: SyntaxKind.JSDocArrayType;
        elementType: JSDocType;
    }
    interface JSDocUnionType extends JSDocType {
        kind: SyntaxKind.JSDocUnionType;
        types: NodeArray<JSDocType>;
    }
    interface JSDocTupleType extends JSDocType {
        kind: SyntaxKind.JSDocTupleType;
        types: NodeArray<JSDocType>;
    }
    interface JSDocNonNullableType extends JSDocType {
        kind: SyntaxKind.JSDocNonNullableType;
        type: JSDocType;
    }
    interface JSDocNullableType extends JSDocType {
        kind: SyntaxKind.JSDocNullableType;
        type: JSDocType;
    }
    interface JSDocRecordType extends JSDocType {
        kind: SyntaxKind.JSDocRecordType;
        literal: TypeLiteralNode;
    }
    interface JSDocTypeReference extends JSDocType {
        kind: SyntaxKind.JSDocTypeReference;
        name: EntityName;
        typeArguments: NodeArray<JSDocType>;
    }
    interface JSDocOptionalType extends JSDocType {
        kind: SyntaxKind.JSDocOptionalType;
        type: JSDocType;
    }
    interface JSDocFunctionType extends JSDocType, SignatureDeclaration {
        kind: SyntaxKind.JSDocFunctionType;
        parameters: NodeArray<ParameterDeclaration>;
        type: JSDocType;
    }
    interface JSDocVariadicType extends JSDocType {
        kind: SyntaxKind.JSDocVariadicType;
        type: JSDocType;
    }
    interface JSDocConstructorType extends JSDocType {
        kind: SyntaxKind.JSDocConstructorType;
        type: JSDocType;
    }
    interface JSDocThisType extends JSDocType {
        kind: SyntaxKind.JSDocThisType;
        type: JSDocType;
    }
    interface JSDocLiteralType extends JSDocType {
        kind: SyntaxKind.JSDocLiteralType;
        literal: LiteralTypeNode;
    }
    type JSDocTypeReferencingNode = JSDocThisType | JSDocConstructorType | JSDocVariadicType | JSDocOptionalType | JSDocNullableType | JSDocNonNullableType;
    interface JSDocRecordMember extends PropertySignature {
        kind: SyntaxKind.JSDocRecordMember;
        name: Identifier | StringLiteral | NumericLiteral;
        type?: JSDocType;
    }
    interface JSDoc extends Node {
        kind: SyntaxKind.JSDocComment;
        tags: NodeArray<JSDocTag> | undefined;
        comment: string | undefined;
    }
    interface JSDocTag extends Node {
        atToken: AtToken;
        tagName: Identifier;
        comment: string | undefined;
    }
    interface JSDocUnknownTag extends JSDocTag {
        kind: SyntaxKind.JSDocTag;
    }
    interface JSDocTemplateTag extends JSDocTag {
        kind: SyntaxKind.JSDocTemplateTag;
        typeParameters: NodeArray<TypeParameterDeclaration>;
    }
    interface JSDocReturnTag extends JSDocTag {
        kind: SyntaxKind.JSDocReturnTag;
        typeExpression: JSDocTypeExpression;
    }
    interface JSDocTypeTag extends JSDocTag {
        kind: SyntaxKind.JSDocTypeTag;
        typeExpression: JSDocTypeExpression;
    }
    interface JSDocTypedefTag extends JSDocTag, Declaration {
        kind: SyntaxKind.JSDocTypedefTag;
        fullName?: JSDocNamespaceDeclaration | Identifier;
        name?: Identifier;
        typeExpression?: JSDocTypeExpression;
        jsDocTypeLiteral?: JSDocTypeLiteral;
    }
    interface JSDocPropertyTag extends JSDocTag, TypeElement {
        kind: SyntaxKind.JSDocPropertyTag;
        name: Identifier;
        typeExpression: JSDocTypeExpression;
    }
    interface JSDocTypeLiteral extends JSDocType {
        kind: SyntaxKind.JSDocTypeLiteral;
        jsDocPropertyTags?: NodeArray<JSDocPropertyTag>;
        jsDocTypeTag?: JSDocTypeTag;
    }
    interface JSDocParameterTag extends JSDocTag {
        kind: SyntaxKind.JSDocParameterTag;
        /** the parameter name, if provided *before* the type (TypeScript-style) */
        preParameterName?: Identifier;
        typeExpression?: JSDocTypeExpression;
        /** the parameter name, if provided *after* the type (JSDoc-standard) */
        postParameterName?: Identifier;
        /** the parameter name, regardless of the location it was provided */
        parameterName: Identifier;
        isBracketed: boolean;
    }
    enum FlowFlags {
        Unreachable = 1,
        Start = 2,
        BranchLabel = 4,
        LoopLabel = 8,
        Assignment = 16,
        TrueCondition = 32,
        FalseCondition = 64,
        SwitchClause = 128,
        ArrayMutation = 256,
        Referenced = 512,
        Shared = 1024,
        Label = 12,
        Condition = 96,
    }
    interface FlowNode {
        flags: FlowFlags;
        id?: number;
    }
    interface FlowStart extends FlowNode {
        container?: FunctionExpression | ArrowFunction | MethodDeclaration;
    }
    interface FlowLabel extends FlowNode {
        antecedents: FlowNode[];
    }
    interface FlowAssignment extends FlowNode {
        node: Expression | VariableDeclaration | BindingElement;
        antecedent: FlowNode;
    }
    interface FlowCondition extends FlowNode {
        expression: Expression;
        antecedent: FlowNode;
    }
    interface FlowSwitchClause extends FlowNode {
        switchStatement: SwitchStatement;
        clauseStart: number;
        clauseEnd: number;
        antecedent: FlowNode;
    }
    interface FlowArrayMutation extends FlowNode {
        node: CallExpression | BinaryExpression;
        antecedent: FlowNode;
    }
    type FlowType = Type | IncompleteType;
    interface IncompleteType {
        flags: TypeFlags;
        type: Type;
    }
    interface AmdDependency {
        path: string;
        name: string;
    }
    interface SourceFile extends Declaration {
        kind: SyntaxKind.SourceFile;
        statements: NodeArray<Statement>;
        endOfFileToken: Token<SyntaxKind.EndOfFileToken>;
        fileName: string;
        path: Path;
        text: string;
        amdDependencies: AmdDependency[];
        moduleName: string;
        referencedFiles: FileReference[];
        typeReferenceDirectives: FileReference[];
        languageVariant: LanguageVariant;
        isDeclarationFile: boolean;
        renamedDependencies?: Map<string>;
        /**
         * lib.d.ts should have a reference comment like
         *
         *  /// <reference no-default-lib="true"/>
         *
         * If any other file has this comment, it signals not to include lib.d.ts
         * because this containing file is intended to act as a default library.
         */
        hasNoDefaultLib: boolean;
        languageVersion: ScriptTarget;
        scriptKind: ScriptKind;
        externalModuleIndicator: Node;
        commonJsModuleIndicator: Node;
        identifiers: Map<string>;
        nodeCount: number;
        identifierCount: number;
        symbolCount: number;
        parseDiagnostics: Diagnostic[];
        additionalSyntacticDiagnostics?: Diagnostic[];
        bindDiagnostics: Diagnostic[];
        lineMap: number[];
        classifiableNames?: Map<string>;
        resolvedModules: Map<ResolvedModuleFull>;
        resolvedTypeReferenceDirectiveNames: Map<ResolvedTypeReferenceDirective>;
        imports: LiteralExpression[];
        moduleAugmentations: LiteralExpression[];
        patternAmbientModules?: PatternAmbientModule[];
        ambientModuleNames: string[];
    }
    interface ScriptReferenceHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFile(fileName: string): SourceFile;
        getSourceFileByPath(path: Path): SourceFile;
        getCurrentDirectory(): string;
    }
    interface ParseConfigHost {
        useCaseSensitiveFileNames: boolean;
        readDirectory(rootDir: string, extensions: string[], excludes: string[], includes: string[]): string[];
        /**
          * Gets a value indicating whether the specified path exists and is a file.
          * @param path The path to test.
          */
        fileExists(path: string): boolean;
        readFile(path: string): string;
    }
    interface WriteFileCallback {
        (fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void, sourceFiles?: SourceFile[]): void;
    }
    class OperationCanceledException {
    }
    interface CancellationToken {
        isCancellationRequested(): boolean;
        /** @throws OperationCanceledException if isCancellationRequested is true */
        throwIfCancellationRequested(): void;
    }
    interface Program extends ScriptReferenceHost {
        /**
         * Get a list of root file names that were passed to a 'createProgram'
         */
        getRootFileNames(): string[];
        /**
         * Get a list of files in the program
         */
        getSourceFiles(): SourceFile[];
        /**
         * Emits the JavaScript and declaration files.  If targetSourceFile is not specified, then
         * the JavaScript and declaration files will be produced for all the files in this program.
         * If targetSourceFile is specified, then only the JavaScript and declaration for that
         * specific file will be generated.
         *
         * If writeFile is not specified then the writeFile callback from the compiler host will be
         * used for writing the JavaScript and declaration files.  Otherwise, the writeFile parameter
         * will be invoked when writing the JavaScript and declaration files.
         */
        emit(targetSourceFile?: SourceFile, writeFile?: WriteFileCallback, cancellationToken?: CancellationToken, emitOnlyDtsFiles?: boolean): EmitResult;
        getOptionsDiagnostics(cancellationToken?: CancellationToken): Diagnostic[];
        getGlobalDiagnostics(cancellationToken?: CancellationToken): Diagnostic[];
        getSyntacticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getSemanticDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getDeclarationDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        /**
         * Gets a type checker that can be used to semantically analyze source fils in the program.
         */
        getTypeChecker(): TypeChecker;
        getCommonSourceDirectory(): string;
        getDiagnosticsProducingTypeChecker(): TypeChecker;
        dropDiagnosticsProducingTypeChecker(): void;
        getClassifiableNames(): Map<string>;
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
        getFileProcessingDiagnostics(): DiagnosticCollection;
        getResolvedTypeReferenceDirectives(): Map<ResolvedTypeReferenceDirective>;
        isSourceFileFromExternalLibrary(file: SourceFile): boolean;
        structureIsReused?: boolean;
    }
    interface SourceMapSpan {
        /** Line number in the .js file. */
        emittedLine: number;
        /** Column number in the .js file. */
        emittedColumn: number;
        /** Line number in the .ts file. */
        sourceLine: number;
        /** Column number in the .ts file. */
        sourceColumn: number;
        /** Optional name (index into names array) associated with this span. */
        nameIndex?: number;
        /** .ts file (index into sources array) associated with this span */
        sourceIndex: number;
    }
    interface SourceMapData {
        sourceMapFilePath: string;
        jsSourceMappingURL: string;
        sourceMapFile: string;
        sourceMapSourceRoot: string;
        sourceMapSources: string[];
        sourceMapSourcesContent?: string[];
        inputSourceFileNames: string[];
        sourceMapNames?: string[];
        sourceMapMappings: string;
        sourceMapDecodedMappings: SourceMapSpan[];
    }
    /** Return code used by getEmitOutput function to indicate status of the function */
    enum ExitStatus {
        Success = 0,
        DiagnosticsPresent_OutputsSkipped = 1,
        DiagnosticsPresent_OutputsGenerated = 2,
    }
    interface EmitResult {
        emitSkipped: boolean;
        /** Contains declaration emit diagnostics */
        diagnostics: Diagnostic[];
        emittedFiles: string[];
        sourceMaps: SourceMapData[];
    }
    interface TypeCheckerHost {
        getCompilerOptions(): CompilerOptions;
        getSourceFiles(): SourceFile[];
        getSourceFile(fileName: string): SourceFile;
        getResolvedTypeReferenceDirectives(): Map<ResolvedTypeReferenceDirective>;
    }
    interface TypeChecker {
        getTypeOfSymbolAtLocation(symbol: Symbol, node: Node): Type;
        getDeclaredTypeOfSymbol(symbol: Symbol): Type;
        getPropertiesOfType(type: Type): Symbol[];
        getPropertyOfType(type: Type, propertyName: string): Symbol;
        getSignaturesOfType(type: Type, kind: SignatureKind): Signature[];
        getIndexTypeOfType(type: Type, kind: IndexKind): Type;
        getBaseTypes(type: InterfaceType): ObjectType[];
        getReturnTypeOfSignature(signature: Signature): Type;
        getNonNullableType(type: Type): Type;
        getSymbolsInScope(location: Node, meaning: SymbolFlags): Symbol[];
        getSymbolAtLocation(node: Node): Symbol;
        getSymbolsOfParameterPropertyDeclaration(parameter: ParameterDeclaration, parameterName: string): Symbol[];
        getShorthandAssignmentValueSymbol(location: Node): Symbol;
        getExportSpecifierLocalTargetSymbol(location: ExportSpecifier): Symbol;
        getPropertySymbolOfDestructuringAssignment(location: Identifier): Symbol;
        getTypeAtLocation(node: Node): Type;
        typeToString(type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): string;
        symbolToString(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): string;
        getSymbolDisplayBuilder(): SymbolDisplayBuilder;
        getFullyQualifiedName(symbol: Symbol): string;
        getAugmentedPropertiesOfType(type: Type): Symbol[];
        getRootSymbols(symbol: Symbol): Symbol[];
        getContextualType(node: Expression): Type;
        getResolvedSignature(node: CallLikeExpression, candidatesOutArray?: Signature[]): Signature;
        getSignatureFromDeclaration(declaration: SignatureDeclaration): Signature;
        isImplementationOfOverload(node: FunctionLikeDeclaration): boolean;
        isUndefinedSymbol(symbol: Symbol): boolean;
        isArgumentsSymbol(symbol: Symbol): boolean;
        isUnknownSymbol(symbol: Symbol): boolean;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): number;
        isValidPropertyAccess(node: PropertyAccessExpression | QualifiedName, propertyName: string): boolean;
        getAliasedSymbol(symbol: Symbol): Symbol;
        getExportsOfModule(moduleSymbol: Symbol): Symbol[];
        getJsxElementAttributesType(elementNode: JsxOpeningLikeElement): Type;
        getJsxIntrinsicTagNames(): Symbol[];
        isOptionalParameter(node: ParameterDeclaration): boolean;
        getAmbientModules(): Symbol[];
        tryFindAmbientModuleWithoutAugmentations(moduleName: string): Symbol;
        getDiagnostics(sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
        getGlobalDiagnostics(): Diagnostic[];
        getEmitResolver(sourceFile?: SourceFile, cancellationToken?: CancellationToken): EmitResolver;
        getNodeCount(): number;
        getIdentifierCount(): number;
        getSymbolCount(): number;
        getTypeCount(): number;
    }
    interface SymbolDisplayBuilder {
        buildTypeDisplay(type: Type, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildSymbolDisplay(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): void;
        buildSignatureDisplay(signatures: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags, kind?: SignatureKind): void;
        buildParameterDisplay(parameter: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplay(tp: TypeParameter, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypePredicateDisplay(predicate: TypePredicate, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildTypeParameterDisplayFromSymbol(symbol: Symbol, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForParametersAndDelimiters(thisParameter: Symbol, parameters: Symbol[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildDisplayForTypeParametersAndDelimiters(typeParameters: TypeParameter[], writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
        buildReturnTypeDisplay(signature: Signature, writer: SymbolWriter, enclosingDeclaration?: Node, flags?: TypeFormatFlags): void;
    }
    interface SymbolWriter {
        writeKeyword(text: string): void;
        writeOperator(text: string): void;
        writePunctuation(text: string): void;
        writeSpace(text: string): void;
        writeStringLiteral(text: string): void;
        writeParameter(text: string): void;
        writeSymbol(text: string, symbol: Symbol): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        clear(): void;
        trackSymbol(symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags): void;
        reportInaccessibleThisError(): void;
    }
    enum TypeFormatFlags {
        None = 0,
        WriteArrayAsGenericType = 1,
        UseTypeOfFunction = 2,
        NoTruncation = 4,
        WriteArrowStyleSignature = 8,
        WriteOwnNameForAnyLike = 16,
        WriteTypeArgumentsOfSignature = 32,
        InElementType = 64,
        UseFullyQualifiedType = 128,
        InFirstTypeArgument = 256,
        InTypeAlias = 512,
        UseTypeAliasValue = 1024,
    }
    enum SymbolFormatFlags {
        None = 0,
        WriteTypeParametersOrArguments = 1,
        UseOnlyExternalAliasing = 2,
    }
    enum SymbolAccessibility {
        Accessible = 0,
        NotAccessible = 1,
        CannotBeNamed = 2,
    }
    enum SyntheticSymbolKind {
        UnionOrIntersection = 0,
        Spread = 1,
    }
    enum TypePredicateKind {
        This = 0,
        Identifier = 1,
    }
    interface TypePredicateBase {
        kind: TypePredicateKind;
        type: Type;
    }
    interface ThisTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.This;
    }
    interface IdentifierTypePredicate extends TypePredicateBase {
        kind: TypePredicateKind.Identifier;
        parameterName: string;
        parameterIndex: number;
    }
    type TypePredicate = IdentifierTypePredicate | ThisTypePredicate;
    type AnyImportSyntax = ImportDeclaration | ImportEqualsDeclaration;
    interface SymbolVisibilityResult {
        accessibility: SymbolAccessibility;
        aliasesToMakeVisible?: AnyImportSyntax[];
        errorSymbolName?: string;
        errorNode?: Node;
    }
    interface SymbolAccessibilityResult extends SymbolVisibilityResult {
        errorModuleName?: string;
    }
    /** Indicates how to serialize the name for a TypeReferenceNode when emitting decorator
      * metadata */
    enum TypeReferenceSerializationKind {
        Unknown = 0,
        TypeWithConstructSignatureAndValue = 1,
        VoidNullableOrNeverType = 2,
        NumberLikeType = 3,
        StringLikeType = 4,
        BooleanType = 5,
        ArrayLikeType = 6,
        ESSymbolType = 7,
        Promise = 8,
        TypeWithCallSignature = 9,
        ObjectType = 10,
    }
    interface EmitResolver {
        hasGlobalName(name: string): boolean;
        getReferencedExportContainer(node: Identifier, prefixLocals?: boolean): SourceFile | ModuleDeclaration | EnumDeclaration;
        getReferencedImportDeclaration(node: Identifier): Declaration;
        getReferencedDeclarationWithCollidingName(node: Identifier): Declaration;
        isDeclarationWithCollidingName(node: Declaration): boolean;
        isValueAliasDeclaration(node: Node): boolean;
        isReferencedAliasDeclaration(node: Node, checkChildren?: boolean): boolean;
        isTopLevelValueImportEqualsWithEntityName(node: ImportEqualsDeclaration): boolean;
        getNodeCheckFlags(node: Node): NodeCheckFlags;
        isDeclarationVisible(node: Declaration): boolean;
        collectLinkedAliases(node: Identifier): Node[];
        isImplementationOfOverload(node: FunctionLikeDeclaration): boolean;
        writeTypeOfDeclaration(declaration: AccessorDeclaration | VariableLikeDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        writeReturnTypeOfSignatureDeclaration(signatureDeclaration: SignatureDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        writeTypeOfExpression(expr: Expression, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        writeBaseConstructorTypeOfClass(node: ClassLikeDeclaration, enclosingDeclaration: Node, flags: TypeFormatFlags, writer: SymbolWriter): void;
        isSymbolAccessible(symbol: Symbol, enclosingDeclaration: Node, meaning: SymbolFlags, shouldComputeAliasToMarkVisible: boolean): SymbolAccessibilityResult;
        isEntityNameVisible(entityName: EntityNameOrEntityNameExpression, enclosingDeclaration: Node): SymbolVisibilityResult;
        getConstantValue(node: EnumMember | PropertyAccessExpression | ElementAccessExpression): number;
        getReferencedValueDeclaration(reference: Identifier): Declaration;
        getTypeReferenceSerializationKind(typeName: EntityName, location?: Node): TypeReferenceSerializationKind;
        isOptionalParameter(node: ParameterDeclaration): boolean;
        moduleExportsSomeValue(moduleReferenceExpression: Expression): boolean;
        isArgumentsLocalBinding(node: Identifier): boolean;
        getExternalModuleFileFromDeclaration(declaration: ImportEqualsDeclaration | ImportDeclaration | ExportDeclaration | ModuleDeclaration): SourceFile;
        getTypeReferenceDirectivesForEntityName(name: EntityNameOrEntityNameExpression): string[];
        getTypeReferenceDirectivesForSymbol(symbol: Symbol, meaning?: SymbolFlags): string[];
        isLiteralConstDeclaration(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration): boolean;
        writeLiteralConstValue(node: VariableDeclaration | PropertyDeclaration | PropertySignature | ParameterDeclaration, writer: SymbolWriter): void;
        getJsxFactoryEntity(): EntityName;
    }
    enum SymbolFlags {
        None = 0,
        FunctionScopedVariable = 1,
        BlockScopedVariable = 2,
        Property = 4,
        EnumMember = 8,
        Function = 16,
        Class = 32,
        Interface = 64,
        ConstEnum = 128,
        RegularEnum = 256,
        ValueModule = 512,
        NamespaceModule = 1024,
        TypeLiteral = 2048,
        ObjectLiteral = 4096,
        Method = 8192,
        Constructor = 16384,
        GetAccessor = 32768,
        SetAccessor = 65536,
        Signature = 131072,
        TypeParameter = 262144,
        TypeAlias = 524288,
        ExportValue = 1048576,
        ExportType = 2097152,
        ExportNamespace = 4194304,
        Alias = 8388608,
        Instantiated = 16777216,
        Merged = 33554432,
        Transient = 67108864,
        Prototype = 134217728,
        SyntheticProperty = 268435456,
        Optional = 536870912,
        ExportStar = 1073741824,
        Enum = 384,
        Variable = 3,
        Value = 107455,
        Type = 793064,
        Namespace = 1920,
        Module = 1536,
        Accessor = 98304,
        FunctionScopedVariableExcludes = 107454,
        BlockScopedVariableExcludes = 107455,
        ParameterExcludes = 107455,
        PropertyExcludes = 0,
        EnumMemberExcludes = 900095,
        FunctionExcludes = 106927,
        ClassExcludes = 899519,
        InterfaceExcludes = 792968,
        RegularEnumExcludes = 899327,
        ConstEnumExcludes = 899967,
        ValueModuleExcludes = 106639,
        NamespaceModuleExcludes = 0,
        MethodExcludes = 99263,
        GetAccessorExcludes = 41919,
        SetAccessorExcludes = 74687,
        TypeParameterExcludes = 530920,
        TypeAliasExcludes = 793064,
        AliasExcludes = 8388608,
        ModuleMember = 8914931,
        ExportHasLocal = 944,
        HasExports = 1952,
        HasMembers = 6240,
        BlockScoped = 418,
        PropertyOrAccessor = 98308,
        Export = 7340032,
        ClassMember = 106500,
        Classifiable = 788448,
    }
    interface Symbol {
        flags: SymbolFlags;
        name: string;
        declarations?: Declaration[];
        valueDeclaration?: Declaration;
        members?: SymbolTable;
        exports?: SymbolTable;
        globalExports?: SymbolTable;
        isReadonly?: boolean;
        id?: number;
        mergeId?: number;
        parent?: Symbol;
        exportSymbol?: Symbol;
        constEnumOnlyModule?: boolean;
        isReferenced?: boolean;
        isReplaceableByMethod?: boolean;
        isAssigned?: boolean;
    }
    interface SymbolLinks {
        target?: Symbol;
        type?: Type;
        declaredType?: Type;
        typeParameters?: TypeParameter[];
        inferredClassType?: Type;
        instantiations?: Map<Type>;
        mapper?: TypeMapper;
        referenced?: boolean;
        containingType?: UnionOrIntersectionType;
        leftSpread?: Symbol;
        rightSpread?: Symbol;
        hasNonUniformType?: boolean;
        isPartial?: boolean;
        isDiscriminantProperty?: boolean;
        resolvedExports?: SymbolTable;
        exportsChecked?: boolean;
        isDeclarationWithCollidingName?: boolean;
        bindingElement?: BindingElement;
        exportsSomeValue?: boolean;
    }
    interface TransientSymbol extends Symbol, SymbolLinks {
    }
    type SymbolTable = Map<Symbol>;
    /** Represents a "prefix*suffix" pattern. */
    interface Pattern {
        prefix: string;
        suffix: string;
    }
    /** Used to track a `declare module "foo*"`-like declaration. */
    interface PatternAmbientModule {
        pattern: Pattern;
        symbol: Symbol;
    }
    enum NodeCheckFlags {
        TypeChecked = 1,
        LexicalThis = 2,
        CaptureThis = 4,
        SuperInstance = 256,
        SuperStatic = 512,
        ContextChecked = 1024,
        AsyncMethodWithSuper = 2048,
        AsyncMethodWithSuperBinding = 4096,
        CaptureArguments = 8192,
        EnumValuesComputed = 16384,
        LexicalModuleMergesWithClass = 32768,
        LoopWithCapturedBlockScopedBinding = 65536,
        CapturedBlockScopedBinding = 131072,
        BlockScopedBindingInLoop = 262144,
        ClassWithBodyScopedClassBinding = 524288,
        BodyScopedClassBinding = 1048576,
        NeedsLoopOutParameter = 2097152,
        AssignmentsMarked = 4194304,
        ClassWithConstructorReference = 8388608,
        ConstructorReferenceInClass = 16777216,
    }
    interface NodeLinks {
        flags?: NodeCheckFlags;
        resolvedType?: Type;
        resolvedSignature?: Signature;
        resolvedSymbol?: Symbol;
        resolvedIndexInfo?: IndexInfo;
        maybeTypePredicate?: boolean;
        enumMemberValue?: number;
        isVisible?: boolean;
        hasReportedStatementInAmbientContext?: boolean;
        jsxFlags?: JsxFlags;
        resolvedJsxType?: Type;
        hasSuperCall?: boolean;
        superCall?: ExpressionStatement;
        switchTypes?: Type[];
    }
    enum TypeFlags {
        Any = 1,
        String = 2,
        Number = 4,
        Boolean = 8,
        Enum = 16,
        StringLiteral = 32,
        NumberLiteral = 64,
        BooleanLiteral = 128,
        EnumLiteral = 256,
        ESSymbol = 512,
        Void = 1024,
        Undefined = 2048,
        Null = 4096,
        Never = 8192,
        TypeParameter = 16384,
        Object = 32768,
        Union = 65536,
        Intersection = 131072,
        Index = 262144,
        IndexedAccess = 524288,
        FreshLiteral = 1048576,
        ContainsWideningType = 2097152,
        ContainsObjectLiteral = 4194304,
        ContainsAnyFunctionType = 8388608,
        Nullable = 6144,
        Literal = 480,
        StringOrNumberLiteral = 96,
        DefinitelyFalsy = 7392,
        PossiblyFalsy = 7406,
        Intrinsic = 16015,
        Primitive = 8190,
        StringLike = 34,
        NumberLike = 340,
        BooleanLike = 136,
        EnumLike = 272,
        UnionOrIntersection = 196608,
        StructuredType = 229376,
        StructuredOrTypeParameter = 507904,
        Narrowable = 1033215,
        NotUnionOrUnit = 33281,
        RequiresWidening = 6291456,
        PropagatingFlags = 14680064,
    }
    type DestructuringPattern = BindingPattern | ObjectLiteralExpression | ArrayLiteralExpression;
    interface Type {
        flags: TypeFlags;
        id: number;
        symbol?: Symbol;
        pattern?: DestructuringPattern;
        aliasSymbol?: Symbol;
        aliasTypeArguments?: Type[];
    }
    interface IntrinsicType extends Type {
        intrinsicName: string;
    }
    interface LiteralType extends Type {
        text: string;
        freshType?: LiteralType;
        regularType?: LiteralType;
    }
    interface EnumType extends Type {
        memberTypes: Map<EnumLiteralType>;
    }
    interface EnumLiteralType extends LiteralType {
        baseType: EnumType & UnionType;
    }
    enum ObjectFlags {
        Class = 1,
        Interface = 2,
        Reference = 4,
        Tuple = 8,
        Anonymous = 16,
        Mapped = 32,
        Instantiated = 64,
        ObjectLiteral = 128,
        EvolvingArray = 256,
        ObjectLiteralPatternWithComputedProperties = 512,
        ClassOrInterface = 3,
    }
    interface ObjectType extends Type {
        objectFlags: ObjectFlags;
    }
    interface InterfaceType extends ObjectType {
        typeParameters: TypeParameter[];
        outerTypeParameters: TypeParameter[];
        localTypeParameters: TypeParameter[];
        thisType: TypeParameter;
        resolvedBaseConstructorType?: Type;
        resolvedBaseTypes: ObjectType[];
    }
    interface InterfaceTypeWithDeclaredMembers extends InterfaceType {
        declaredProperties: Symbol[];
        declaredCallSignatures: Signature[];
        declaredConstructSignatures: Signature[];
        declaredStringIndexInfo: IndexInfo;
        declaredNumberIndexInfo: IndexInfo;
    }
    interface TypeReference extends ObjectType {
        target: GenericType;
        typeArguments: Type[];
    }
    interface GenericType extends InterfaceType, TypeReference {
        instantiations: Map<TypeReference>;
    }
    interface UnionOrIntersectionType extends Type {
        types: Type[];
        resolvedProperties: SymbolTable;
        couldContainTypeParameters: boolean;
    }
    interface UnionType extends UnionOrIntersectionType {
    }
    interface IntersectionType extends UnionOrIntersectionType {
    }
    type StructuredType = ObjectType | UnionType | IntersectionType;
    interface AnonymousType extends ObjectType {
        target?: AnonymousType;
        mapper?: TypeMapper;
    }
    interface MappedType extends ObjectType {
        declaration: MappedTypeNode;
        typeParameter?: TypeParameter;
        constraintType?: Type;
        templateType?: Type;
        mapper?: TypeMapper;
    }
    interface EvolvingArrayType extends ObjectType {
        elementType: Type;
        finalArrayType?: Type;
    }
    interface ResolvedType extends ObjectType, UnionOrIntersectionType {
        members: SymbolTable;
        properties: Symbol[];
        callSignatures: Signature[];
        constructSignatures: Signature[];
        stringIndexInfo?: IndexInfo;
        numberIndexInfo?: IndexInfo;
    }
    interface FreshObjectLiteralType extends ResolvedType {
        regularType: ResolvedType;
    }
    interface IterableOrIteratorType extends ObjectType, UnionType {
        iterableElementType?: Type;
        iteratorElementType?: Type;
    }
    interface TypeParameter extends Type {
        constraint: Type;
        target?: TypeParameter;
        mapper?: TypeMapper;
        resolvedApparentType: Type;
        resolvedIndexType: IndexType;
        resolvedIndexedAccessTypes: IndexedAccessType[];
        isThisType?: boolean;
    }
    interface IndexType extends Type {
        type: TypeParameter;
    }
    interface IndexedAccessType extends Type {
        objectType: Type;
        indexType: TypeParameter;
    }
    enum SignatureKind {
        Call = 0,
        Construct = 1,
    }
    interface Signature {
        declaration: SignatureDeclaration;
        typeParameters: TypeParameter[];
        parameters: Symbol[];
        thisParameter?: Symbol;
        resolvedReturnType: Type;
        minArgumentCount: number;
        hasRestParameter: boolean;
        hasLiteralTypes: boolean;
        target?: Signature;
        mapper?: TypeMapper;
        unionSignatures?: Signature[];
        erasedSignatureCache?: Signature;
        isolatedSignatureType?: ObjectType;
        typePredicate?: TypePredicate;
        instantiations?: Map<Signature>;
    }
    enum IndexKind {
        String = 0,
        Number = 1,
    }
    interface IndexInfo {
        type: Type;
        isReadonly: boolean;
        declaration?: SignatureDeclaration;
    }
    interface TypeMapper {
        (t: TypeParameter): Type;
        mappedTypes?: Type[];
        instantiations?: Type[];
        context?: InferenceContext;
    }
    interface TypeInferences {
        primary: Type[];
        secondary: Type[];
        topLevel: boolean;
        isFixed: boolean;
    }
    interface InferenceContext {
        signature: Signature;
        inferUnionTypes: boolean;
        inferences: TypeInferences[];
        inferredTypes: Type[];
        mapper?: TypeMapper;
        failedTypeParameterIndex?: number;
    }
    enum SpecialPropertyAssignmentKind {
        None = 0,
        ExportsProperty = 1,
        ModuleExports = 2,
        PrototypeProperty = 3,
        ThisProperty = 4,
    }
    interface DiagnosticMessage {
        key: string;
        category: DiagnosticCategory;
        code: number;
        message: string;
    }
    /**
     * A linked list of formatted diagnostic messages to be used as part of a multiline message.
     * It is built from the bottom up, leaving the head to be the "main" diagnostic.
     * While it seems that DiagnosticMessageChain is structurally similar to DiagnosticMessage,
     * the difference is that messages are all preformatted in DMC.
     */
    interface DiagnosticMessageChain {
        messageText: string;
        category: DiagnosticCategory;
        code: number;
        next?: DiagnosticMessageChain;
    }
    interface Diagnostic {
        file: SourceFile;
        start: number;
        length: number;
        messageText: string | DiagnosticMessageChain;
        category: DiagnosticCategory;
        code: number;
    }
    enum DiagnosticCategory {
        Warning = 0,
        Error = 1,
        Message = 2,
    }
    enum ModuleResolutionKind {
        Classic = 1,
        NodeJs = 2,
    }
    type CompilerOptionsValue = string | number | boolean | (string | number)[] | string[] | MapLike<string[]>;
    interface CompilerOptions {
        allowJs?: boolean;
        allowNonTsExtensions?: boolean;
        allowSyntheticDefaultImports?: boolean;
        allowUnreachableCode?: boolean;
        allowUnusedLabels?: boolean;
        alwaysStrict?: boolean;
        baseUrl?: string;
        charset?: string;
        configFilePath?: string;
        declaration?: boolean;
        declarationDir?: string;
        diagnostics?: boolean;
        extendedDiagnostics?: boolean;
        disableSizeLimit?: boolean;
        emitBOM?: boolean;
        emitDecoratorMetadata?: boolean;
        experimentalDecorators?: boolean;
        forceConsistentCasingInFileNames?: boolean;
        help?: boolean;
        importHelpers?: boolean;
        init?: boolean;
        inlineSourceMap?: boolean;
        inlineSources?: boolean;
        isolatedModules?: boolean;
        jsx?: JsxEmit;
        lib?: string[];
        listEmittedFiles?: boolean;
        listFiles?: boolean;
        locale?: string;
        mapRoot?: string;
        maxNodeModuleJsDepth?: number;
        module?: ModuleKind;
        moduleResolution?: ModuleResolutionKind;
        newLine?: NewLineKind;
        noEmit?: boolean;
        noEmitForJsFiles?: boolean;
        noEmitHelpers?: boolean;
        noEmitOnError?: boolean;
        noErrorTruncation?: boolean;
        noFallthroughCasesInSwitch?: boolean;
        noImplicitAny?: boolean;
        noImplicitReturns?: boolean;
        noImplicitThis?: boolean;
        noUnusedLocals?: boolean;
        noUnusedParameters?: boolean;
        noImplicitUseStrict?: boolean;
        noLib?: boolean;
        noResolve?: boolean;
        out?: string;
        outDir?: string;
        outFile?: string;
        paths?: MapLike<string[]>;
        preserveConstEnums?: boolean;
        project?: string;
        pretty?: DiagnosticStyle;
        reactNamespace?: string;
        jsxFactory?: string;
        removeComments?: boolean;
        rootDir?: string;
        rootDirs?: string[];
        skipLibCheck?: boolean;
        skipDefaultLibCheck?: boolean;
        sourceMap?: boolean;
        sourceRoot?: string;
        strictNullChecks?: boolean;
        stripInternal?: boolean;
        suppressExcessPropertyErrors?: boolean;
        suppressImplicitAnyIndexErrors?: boolean;
        suppressOutputPathCheck?: boolean;
        target?: ScriptTarget;
        traceResolution?: boolean;
        types?: string[];
        /** Paths used to used to compute primary types search locations */
        typeRoots?: string[];
        version?: boolean;
        watch?: boolean;
        [option: string]: CompilerOptionsValue | undefined;
    }
    interface TypingOptions {
        enableAutoDiscovery?: boolean;
        include?: string[];
        exclude?: string[];
        [option: string]: string[] | boolean | undefined;
    }
    interface DiscoverTypingsInfo {
        fileNames: string[];
        projectRootPath: string;
        safeListPath: string;
        packageNameToTypingLocation: Map<string>;
        typingOptions: TypingOptions;
        compilerOptions: CompilerOptions;
        unresolvedImports: ReadonlyArray<string>;
    }
    enum ModuleKind {
        None = 0,
        CommonJS = 1,
        AMD = 2,
        UMD = 3,
        System = 4,
        ES2015 = 5,
    }
    enum JsxEmit {
        None = 0,
        Preserve = 1,
        React = 2,
    }
    enum NewLineKind {
        CarriageReturnLineFeed = 0,
        LineFeed = 1,
    }
    interface LineAndCharacter {
        line: number;
        character: number;
    }
    enum ScriptKind {
        Unknown = 0,
        JS = 1,
        JSX = 2,
        TS = 3,
        TSX = 4,
    }
    enum ScriptTarget {
        ES3 = 0,
        ES5 = 1,
        ES2015 = 2,
        ES2016 = 3,
        ES2017 = 4,
        ESNext = 5,
        Latest = 5,
    }
    enum LanguageVariant {
        Standard = 0,
        JSX = 1,
    }
    enum DiagnosticStyle {
        Simple = 0,
        Pretty = 1,
    }
    /** Either a parsed command line or a parsed tsconfig.json */
    interface ParsedCommandLine {
        options: CompilerOptions;
        typingOptions?: TypingOptions;
        fileNames: string[];
        raw?: any;
        errors: Diagnostic[];
        wildcardDirectories?: MapLike<WatchDirectoryFlags>;
        compileOnSave?: boolean;
    }
    enum WatchDirectoryFlags {
        None = 0,
        Recursive = 1,
    }
    interface ExpandResult {
        fileNames: string[];
        wildcardDirectories: MapLike<WatchDirectoryFlags>;
    }
    interface CommandLineOptionBase {
        name: string;
        type: "string" | "number" | "boolean" | "object" | "list" | Map<number | string>;
        isFilePath?: boolean;
        shortName?: string;
        description?: DiagnosticMessage;
        paramType?: DiagnosticMessage;
        experimental?: boolean;
        isTSConfigOnly?: boolean;
    }
    interface CommandLineOptionOfPrimitiveType extends CommandLineOptionBase {
        type: "string" | "number" | "boolean";
    }
    interface CommandLineOptionOfCustomType extends CommandLineOptionBase {
        type: Map<number | string>;
    }
    interface TsConfigOnlyOption extends CommandLineOptionBase {
        type: "object";
    }
    interface CommandLineOptionOfListType extends CommandLineOptionBase {
        type: "list";
        element: CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType;
    }
    type CommandLineOption = CommandLineOptionOfCustomType | CommandLineOptionOfPrimitiveType | TsConfigOnlyOption | CommandLineOptionOfListType;
    enum CharacterCodes {
        nullCharacter = 0,
        maxAsciiCharacter = 127,
        lineFeed = 10,
        carriageReturn = 13,
        lineSeparator = 8232,
        paragraphSeparator = 8233,
        nextLine = 133,
        space = 32,
        nonBreakingSpace = 160,
        enQuad = 8192,
        emQuad = 8193,
        enSpace = 8194,
        emSpace = 8195,
        threePerEmSpace = 8196,
        fourPerEmSpace = 8197,
        sixPerEmSpace = 8198,
        figureSpace = 8199,
        punctuationSpace = 8200,
        thinSpace = 8201,
        hairSpace = 8202,
        zeroWidthSpace = 8203,
        narrowNoBreakSpace = 8239,
        ideographicSpace = 12288,
        mathematicalSpace = 8287,
        ogham = 5760,
        _ = 95,
        $ = 36,
        _0 = 48,
        _1 = 49,
        _2 = 50,
        _3 = 51,
        _4 = 52,
        _5 = 53,
        _6 = 54,
        _7 = 55,
        _8 = 56,
        _9 = 57,
        a = 97,
        b = 98,
        c = 99,
        d = 100,
        e = 101,
        f = 102,
        g = 103,
        h = 104,
        i = 105,
        j = 106,
        k = 107,
        l = 108,
        m = 109,
        n = 110,
        o = 111,
        p = 112,
        q = 113,
        r = 114,
        s = 115,
        t = 116,
        u = 117,
        v = 118,
        w = 119,
        x = 120,
        y = 121,
        z = 122,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        ampersand = 38,
        asterisk = 42,
        at = 64,
        backslash = 92,
        backtick = 96,
        bar = 124,
        caret = 94,
        closeBrace = 125,
        closeBracket = 93,
        closeParen = 41,
        colon = 58,
        comma = 44,
        dot = 46,
        doubleQuote = 34,
        equals = 61,
        exclamation = 33,
        greaterThan = 62,
        hash = 35,
        lessThan = 60,
        minus = 45,
        openBrace = 123,
        openBracket = 91,
        openParen = 40,
        percent = 37,
        plus = 43,
        question = 63,
        semicolon = 59,
        singleQuote = 39,
        slash = 47,
        tilde = 126,
        backspace = 8,
        formFeed = 12,
        byteOrderMark = 65279,
        tab = 9,
        verticalTab = 11,
    }
    interface ModuleResolutionHost {
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string;
        trace?(s: string): void;
        directoryExists?(directoryName: string): boolean;
        realpath?(path: string): string;
        getCurrentDirectory?(): string;
        getDirectories?(path: string): string[];
    }
    /**
     * Represents the result of module resolution.
     * Module resolution will pick up tsx/jsx/js files even if '--jsx' and '--allowJs' are turned off.
     * The Program will then filter results based on these flags.
     *
     * Prefer to return a `ResolvedModuleFull` so that the file type does not have to be inferred.
     */
    interface ResolvedModule {
        /** Path of the file the module was resolved to. */
        resolvedFileName: string;
        /**
         * Denotes if 'resolvedFileName' is isExternalLibraryImport and thus should be a proper external module:
         * - be a .d.ts file
         * - use top level imports\exports
         * - don't use tripleslash references
         */
        isExternalLibraryImport?: boolean;
    }
    /**
     * ResolvedModule with an explicitly provided `extension` property.
     * Prefer this over `ResolvedModule`.
     */
    interface ResolvedModuleFull extends ResolvedModule {
        /**
         * Extension of resolvedFileName. This must match what's at the end of resolvedFileName.
         * This is optional for backwards-compatibility, but will be added if not provided.
         */
        extension: Extension;
    }
    enum Extension {
        Ts = 0,
        Tsx = 1,
        Dts = 2,
        Js = 3,
        Jsx = 4,
        LastTypeScriptExtension = 2,
    }
    interface ResolvedModuleWithFailedLookupLocations {
        resolvedModule: ResolvedModuleFull | undefined;
        failedLookupLocations: string[];
    }
    interface ResolvedTypeReferenceDirective {
        primary: boolean;
        resolvedFileName?: string;
    }
    interface ResolvedTypeReferenceDirectiveWithFailedLookupLocations {
        resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective;
        failedLookupLocations: string[];
    }
    interface CompilerHost extends ModuleResolutionHost {
        getSourceFile(fileName: string, languageVersion: ScriptTarget, onError?: (message: string) => void): SourceFile;
        getSourceFileByPath?(fileName: string, path: Path, languageVersion: ScriptTarget, onError?: (message: string) => void): SourceFile;
        getCancellationToken?(): CancellationToken;
        getDefaultLibFileName(options: CompilerOptions): string;
        getDefaultLibLocation?(): string;
        writeFile: WriteFileCallback;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        getCanonicalFileName(fileName: string): string;
        useCaseSensitiveFileNames(): boolean;
        getNewLine(): string;
        resolveModuleNames?(moduleNames: string[], containingFile: string): ResolvedModule[];
        /**
         * This method is a companion for 'resolveModuleNames' and is used to resolve 'types' references to actual type declaration files
         */
        resolveTypeReferenceDirectives?(typeReferenceDirectiveNames: string[], containingFile: string): ResolvedTypeReferenceDirective[];
        getEnvironmentVariable?(name: string): string;
    }
    enum TransformFlags {
        None = 0,
        TypeScript = 1,
        ContainsTypeScript = 2,
        ContainsJsx = 4,
        ContainsESNext = 8,
        ContainsES2017 = 16,
        ContainsES2016 = 32,
        ES2015 = 64,
        ContainsES2015 = 128,
        Generator = 256,
        ContainsGenerator = 512,
        DestructuringAssignment = 1024,
        ContainsDestructuringAssignment = 2048,
        ContainsDecorators = 4096,
        ContainsPropertyInitializer = 8192,
        ContainsLexicalThis = 16384,
        ContainsCapturedLexicalThis = 32768,
        ContainsLexicalThisInComputedPropertyName = 65536,
        ContainsDefaultValueAssignments = 131072,
        ContainsParameterPropertyAssignments = 262144,
        ContainsSpread = 524288,
        ContainsObjectSpread = 1048576,
        ContainsRest = 524288,
        ContainsObjectRest = 1048576,
        ContainsComputedPropertyName = 2097152,
        ContainsBlockScopedBinding = 4194304,
        ContainsBindingPattern = 8388608,
        ContainsYield = 16777216,
        ContainsHoistedDeclarationOrCompletion = 33554432,
        HasComputedFlags = 536870912,
        AssertTypeScript = 3,
        AssertJsx = 4,
        AssertESNext = 8,
        AssertES2017 = 16,
        AssertES2016 = 32,
        AssertES2015 = 192,
        AssertGenerator = 768,
        AssertDestructuringAssignment = 3072,
        NodeExcludes = 536872257,
        ArrowFunctionExcludes = 601249089,
        FunctionExcludes = 601281857,
        ConstructorExcludes = 601015617,
        MethodOrAccessorExcludes = 601015617,
        ClassExcludes = 539358529,
        ModuleExcludes = 574674241,
        TypeExcludes = -3,
        ObjectLiteralExcludes = 540087617,
        ArrayLiteralOrCallOrNewExcludes = 537396545,
        VariableDeclarationListExcludes = 546309441,
        ParameterExcludes = 536872257,
        CatchClauseExcludes = 537920833,
        BindingPatternExcludes = 537396545,
        TypeScriptClassSyntaxMask = 274432,
        ES2015FunctionSyntaxMask = 163840,
    }
    interface EmitNode {
        annotatedNodes?: Node[];
        flags?: EmitFlags;
        commentRange?: TextRange;
        sourceMapRange?: TextRange;
        tokenSourceMapRanges?: Map<TextRange>;
        constantValue?: number;
        externalHelpersModuleName?: Identifier;
        helpers?: EmitHelper[];
    }
    enum EmitFlags {
        SingleLine = 1,
        AdviseOnEmitNode = 2,
        NoSubstitution = 4,
        CapturesThis = 8,
        NoLeadingSourceMap = 16,
        NoTrailingSourceMap = 32,
        NoSourceMap = 48,
        NoNestedSourceMaps = 64,
        NoTokenLeadingSourceMaps = 128,
        NoTokenTrailingSourceMaps = 256,
        NoTokenSourceMaps = 384,
        NoLeadingComments = 512,
        NoTrailingComments = 1024,
        NoComments = 1536,
        NoNestedComments = 2048,
        HelperName = 4096,
        ExportName = 8192,
        LocalName = 16384,
        Indented = 32768,
        NoIndentation = 65536,
        AsyncFunctionBody = 131072,
        ReuseTempVariableScope = 262144,
        CustomPrologue = 524288,
        NoHoisting = 1048576,
        HasEndOfDeclarationMarker = 2097152,
    }
    interface EmitHelper {
        readonly name: string;
        readonly scoped: boolean;
        readonly text: string;
        readonly priority?: number;
    }
    enum EmitContext {
        SourceFile = 0,
        Expression = 1,
        IdentifierName = 2,
        Unspecified = 3,
    }
    interface EmitHost extends ScriptReferenceHost {
        getSourceFiles(): SourceFile[];
        isSourceFileFromExternalLibrary(file: SourceFile): boolean;
        getCommonSourceDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        getNewLine(): string;
        isEmitBlocked(emitFileName: string): boolean;
        writeFile: WriteFileCallback;
    }
    interface TransformationContext {
        getCompilerOptions(): CompilerOptions;
        getEmitResolver(): EmitResolver;
        getEmitHost(): EmitHost;
        /** Starts a new lexical environment. */
        startLexicalEnvironment(): void;
        /** Suspends the current lexical environment, usually after visiting a parameter list. */
        suspendLexicalEnvironment(): void;
        /** Resumes a suspended lexical environment, usually before visiting a function body. */
        resumeLexicalEnvironment(): void;
        /** Ends a lexical environment, returning any declarations. */
        endLexicalEnvironment(): Statement[];
        /**
         * Hoists a function declaration to the containing scope.
         */
        hoistFunctionDeclaration(node: FunctionDeclaration): void;
        /**
         * Hoists a variable declaration to the containing scope.
         */
        hoistVariableDeclaration(node: Identifier): void;
        /**
         * Records a request for a non-scoped emit helper in the current context.
         */
        requestEmitHelper(helper: EmitHelper): void;
        /**
         * Gets and resets the requested non-scoped emit helpers.
         */
        readEmitHelpers(): EmitHelper[] | undefined;
        /**
         * Enables expression substitutions in the pretty printer for the provided SyntaxKind.
         */
        enableSubstitution(kind: SyntaxKind): void;
        /**
         * Determines whether expression substitutions are enabled for the provided node.
         */
        isSubstitutionEnabled(node: Node): boolean;
        /**
         * Hook used by transformers to substitute expressions just before they
         * are emitted by the pretty printer.
         */
        onSubstituteNode?: (emitContext: EmitContext, node: Node) => Node;
        /**
         * Enables before/after emit notifications in the pretty printer for the provided
         * SyntaxKind.
         */
        enableEmitNotification(kind: SyntaxKind): void;
        /**
         * Determines whether before/after emit notifications should be raised in the pretty
         * printer when it emits a node.
         */
        isEmitNotificationEnabled(node: Node): boolean;
        /**
         * Hook used to allow transformers to capture state before or after
         * the printer emits a node.
         */
        onEmitNode?: (emitContext: EmitContext, node: Node, emitCallback: (emitContext: EmitContext, node: Node) => void) => void;
    }
    interface TransformationResult {
        /**
         * Gets the transformed source files.
         */
        transformed: SourceFile[];
        /**
         * Emits the substitute for a node, if one is available; otherwise, emits the node.
         *
         * @param emitContext The current emit context.
         * @param node The node to substitute.
         * @param emitCallback A callback used to emit the node or its substitute.
         */
        emitNodeWithSubstitution(emitContext: EmitContext, node: Node, emitCallback: (emitContext: EmitContext, node: Node) => void): void;
        /**
         * Emits a node with possible notification.
         *
         * @param emitContext The current emit context.
         * @param node The node to emit.
         * @param emitCallback A callback used to emit the node.
         */
        emitNodeWithNotification(emitContext: EmitContext, node: Node, emitCallback: (emitContext: EmitContext, node: Node) => void): void;
    }
    type Transformer = (context: TransformationContext) => (node: SourceFile) => SourceFile;
    interface TextSpan {
        start: number;
        length: number;
    }
    interface TextChangeRange {
        span: TextSpan;
        newLength: number;
    }
    interface DiagnosticCollection {
        add(diagnostic: Diagnostic): void;
        getGlobalDiagnostics(): Diagnostic[];
        getDiagnostics(fileName?: string): Diagnostic[];
        getModificationCount(): number;
        reattachFileDiagnostics(newFile: SourceFile): void;
    }
    interface SyntaxList extends Node {
        _children: Node[];
    }
}
declare namespace ts {
    /** Gets a timestamp with (at least) ms resolution */
    const timestamp: () => number;
}
/** Performance measurements for the compiler. */
declare namespace ts.performance {
    /**
     * Marks a performance event.
     *
     * @param markName The name of the mark.
     */
    function mark(markName: string): void;
    /**
     * Adds a performance measurement with the specified name.
     *
     * @param measureName The name of the performance measurement.
     * @param startMarkName The name of the starting mark. If not supplied, the point at which the
     *      profiler was enabled is used.
     * @param endMarkName The name of the ending mark. If not supplied, the current timestamp is
     *      used.
     */
    function measure(measureName: string, startMarkName?: string, endMarkName?: string): void;
    /**
     * Gets the number of times a marker was encountered.
     *
     * @param markName The name of the mark.
     */
    function getCount(markName: string): number;
    /**
     * Gets the total duration of all measurements with the supplied name.
     *
     * @param measureName The name of the measure whose durations should be accumulated.
     */
    function getDuration(measureName: string): number;
    /**
     * Iterate over each measure, performing some action
     *
     * @param cb The action to perform for each measure
     */
    function forEachMeasure(cb: (measureName: string, duration: number) => void): void;
    /** Enables (and resets) performance measurements for the compiler. */
    function enable(): void;
    /** Disables performance measurements for the compiler. */
    function disable(): void;
}
declare namespace ts {
    /** The version of the TypeScript compiler release */
    const version = "2.2.0";
}
declare namespace ts {
    /**
     * Ternary values are defined such that
     * x & y is False if either x or y is False.
     * x & y is Maybe if either x or y is Maybe, but neither x or y is False.
     * x & y is True if both x and y are True.
     * x | y is False if both x and y are False.
     * x | y is Maybe if either x or y is Maybe, but neither x or y is True.
     * x | y is True if either x or y is True.
     */
    enum Ternary {
        False = 0,
        Maybe = 1,
        True = -1,
    }
    const collator: {
        compare(a: string, b: string): number;
    };
    function createMap<T>(template?: MapLike<T>): Map<T>;
    function createFileMap<T>(keyMapper?: (key: string) => string): FileMap<T>;
    function toPath(fileName: string, basePath: string, getCanonicalFileName: (path: string) => string): Path;
    enum Comparison {
        LessThan = -1,
        EqualTo = 0,
        GreaterThan = 1,
    }
    /**
     * Iterates through 'array' by index and performs the callback on each element of array until the callback
     * returns a truthy value, then returns that value.
     * If no such value is found, the callback is applied to each element of array and undefined is returned.
     */
    function forEach<T, U>(array: T[] | undefined, callback: (element: T, index: number) => U | undefined): U | undefined;
    function zipWith<T, U>(arrayA: T[], arrayB: U[], callback: (a: T, b: U, index: number) => void): void;
    /**
     * Iterates through `array` by index and performs the callback on each element of array until the callback
     * returns a falsey value, then returns false.
     * If no such value is found, the callback is applied to each element of array and `true` is returned.
     */
    function every<T>(array: T[], callback: (element: T, index: number) => boolean): boolean;
    /** Works like Array.prototype.find, returning `undefined` if no element satisfying the predicate is found. */
    function find<T>(array: T[], predicate: (element: T, index: number) => boolean): T | undefined;
    /**
     * Returns the first truthy result of `callback`, or else fails.
     * This is like `forEach`, but never returns undefined.
     */
    function findMap<T, U>(array: T[], callback: (element: T, index: number) => U | undefined): U;
    function contains<T>(array: T[], value: T): boolean;
    function indexOf<T>(array: T[], value: T): number;
    function indexOfAnyCharCode(text: string, charCodes: number[], start?: number): number;
    function countWhere<T>(array: T[], predicate: (x: T, i: number) => boolean): number;
    /**
     * Filters an array by a predicate function. Returns the same array instance if the predicate is
     * true for all elements, otherwise returns a new array instance containing the filtered subset.
     */
    function filter<T, U extends T>(array: T[], f: (x: T) => x is U): U[];
    function filter<T>(array: T[], f: (x: T) => boolean): T[];
    function removeWhere<T>(array: T[], f: (x: T) => boolean): boolean;
    function filterMutate<T>(array: T[], f: (x: T) => boolean): void;
    function map<T, U>(array: T[], f: (x: T, i: number) => U): U[];
    function sameMap<T>(array: T[], f: (x: T, i: number) => T): T[];
    /**
     * Flattens an array containing a mix of array or non-array elements.
     *
     * @param array The array to flatten.
     */
    function flatten<T>(array: (T | T[])[]): T[];
    /**
     * Maps an array. If the mapped value is an array, it is spread into the result.
     *
     * @param array The array to map.
     * @param mapfn The callback used to map the result into one or more values.
     */
    function flatMap<T, U>(array: T[], mapfn: (x: T, i: number) => U | U[]): U[];
    /**
     * Computes the first matching span of elements and returns a tuple of the first span
     * and the remaining elements.
     */
    function span<T>(array: T[], f: (x: T, i: number) => boolean): [T[], T[]];
    /**
     * Maps contiguous spans of values with the same key.
     *
     * @param array The array to map.
     * @param keyfn A callback used to select the key for an element.
     * @param mapfn A callback used to map a contiguous chunk of values to a single value.
     */
    function spanMap<T, K, U>(array: T[], keyfn: (x: T, i: number) => K, mapfn: (chunk: T[], key: K, start: number, end: number) => U): U[];
    function mapObject<T, U>(object: MapLike<T>, f: (key: string, x: T) => [string, U]): MapLike<U>;
    function some<T>(array: T[], predicate?: (value: T) => boolean): boolean;
    function concatenate<T>(array1: T[], array2: T[]): T[];
    function deduplicate<T>(array: T[], areEqual?: (a: T, b: T) => boolean): T[];
    function arrayIsEqualTo<T>(array1: ReadonlyArray<T>, array2: ReadonlyArray<T>, equaler?: (a: T, b: T) => boolean): boolean;
    function changesAffectModuleResolution(oldOptions: CompilerOptions, newOptions: CompilerOptions): boolean;
    /**
     * Compacts an array, removing any falsey elements.
     */
    function compact<T>(array: T[]): T[];
    /**
     * Gets the relative complement of `arrayA` with respect to `b`, returning the elements that
     * are not present in `arrayA` but are present in `arrayB`. Assumes both arrays are sorted
     * based on the provided comparer.
     */
    function relativeComplement<T>(arrayA: T[] | undefined, arrayB: T[] | undefined, comparer?: (x: T, y: T) => Comparison, offsetA?: number, offsetB?: number): T[] | undefined;
    function sum(array: any[], prop: string): number;
    /**
     * Appends a value to an array, returning the array.
     *
     * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
     * is created if `value` was appended.
     * @param value The value to append to the array. If `value` is `undefined`, nothing is
     * appended.
     */
    function append<T>(to: T[] | undefined, value: T | undefined): T[] | undefined;
    /**
     * Appends a range of value to an array, returning the array.
     *
     * @param to The array to which `value` is to be appended. If `to` is `undefined`, a new array
     * is created if `value` was appended.
     * @param from The values to append to the array. If `from` is `undefined`, nothing is
     * appended. If an element of `from` is `undefined`, that element is not appended.
     */
    function addRange<T>(to: T[] | undefined, from: T[] | undefined): T[] | undefined;
    /**
     * Stable sort of an array. Elements equal to each other maintain their relative position in the array.
     */
    function stableSort<T>(array: T[], comparer?: (x: T, y: T) => Comparison): T[];
    function rangeEquals<T>(array1: T[], array2: T[], pos: number, end: number): boolean;
    /**
     * Returns the first element of an array if non-empty, `undefined` otherwise.
     */
    function firstOrUndefined<T>(array: T[]): T;
    /**
     * Returns the last element of an array if non-empty, `undefined` otherwise.
     */
    function lastOrUndefined<T>(array: T[]): T;
    /**
     * Returns the only element of an array if it contains only one element, `undefined` otherwise.
     */
    function singleOrUndefined<T>(array: T[]): T;
    /**
     * Returns the only element of an array if it contains only one element; otheriwse, returns the
     * array.
     */
    function singleOrMany<T>(array: T[]): T | T[];
    function replaceElement<T>(array: T[], index: number, value: T): T[];
    /**
     * Performs a binary search, finding the index at which 'value' occurs in 'array'.
     * If no such index is found, returns the 2's-complement of first index at which
     * number[index] exceeds number.
     * @param array A sorted array whose first element must be no larger than number
     * @param number The value to be searched for in the array.
     */
    function binarySearch<T>(array: T[], value: T, comparer?: (v1: T, v2: T) => number, offset?: number): number;
    function reduceLeft<T, U>(array: T[], f: (memo: U, value: T, i: number) => U, initial: U, start?: number, count?: number): U;
    function reduceLeft<T>(array: T[], f: (memo: T, value: T, i: number) => T): T;
    function reduceRight<T, U>(array: T[], f: (memo: U, value: T, i: number) => U, initial: U, start?: number, count?: number): U;
    function reduceRight<T>(array: T[], f: (memo: T, value: T, i: number) => T): T;
    /**
     * Indicates whether a map-like contains an own property with the specified key.
     *
     * NOTE: This is intended for use only with MapLike<T> objects. For Map<T> objects, use
     *       the 'in' operator.
     *
     * @param map A map-like.
     * @param key A property key.
     */
    function hasProperty<T>(map: MapLike<T>, key: string): boolean;
    /**
     * Gets the value of an owned property in a map-like.
     *
     * NOTE: This is intended for use only with MapLike<T> objects. For Map<T> objects, use
     *       an indexer.
     *
     * @param map A map-like.
     * @param key A property key.
     */
    function getProperty<T>(map: MapLike<T>, key: string): T | undefined;
    /**
     * Gets the owned, enumerable property keys of a map-like.
     *
     * NOTE: This is intended for use with MapLike<T> objects. For Map<T> objects, use
     *       Object.keys instead as it offers better performance.
     *
     * @param map A map-like.
     */
    function getOwnKeys<T>(map: MapLike<T>): string[];
    /**
     * Enumerates the properties of a Map<T>, invoking a callback and returning the first truthy result.
     *
     * @param map A map for which properties should be enumerated.
     * @param callback A callback to invoke for each property.
     */
    function forEachProperty<T, U>(map: Map<T>, callback: (value: T, key: string) => U): U;
    /**
     * Returns true if a Map<T> has some matching property.
     *
     * @param map A map whose properties should be tested.
     * @param predicate An optional callback used to test each property.
     */
    function someProperties<T>(map: Map<T>, predicate?: (value: T, key: string) => boolean): boolean;
    /**
     * Performs a shallow copy of the properties from a source Map<T> to a target MapLike<T>
     *
     * @param source A map from which properties should be copied.
     * @param target A map to which properties should be copied.
     */
    function copyProperties<T>(source: Map<T>, target: MapLike<T>): void;
    function appendProperty<T>(map: Map<T>, key: string | number, value: T): Map<T>;
    function assign<T1 extends MapLike<{}>, T2, T3>(t: T1, arg1: T2, arg2: T3): T1 & T2 & T3;
    function assign<T1 extends MapLike<{}>, T2>(t: T1, arg1: T2): T1 & T2;
    function assign<T1 extends MapLike<{}>>(t: T1, ...args: any[]): any;
    /**
     * Reduce the properties of a map.
     *
     * NOTE: This is intended for use with Map<T> objects. For MapLike<T> objects, use
     *       reduceOwnProperties instead as it offers better runtime safety.
     *
     * @param map The map to reduce
     * @param callback An aggregation function that is called for each entry in the map
     * @param initial The initial value for the reduction.
     */
    function reduceProperties<T, U>(map: Map<T>, callback: (aggregate: U, value: T, key: string) => U, initial: U): U;
    /**
     * Reduce the properties defined on a map-like (but not from its prototype chain).
     *
     * NOTE: This is intended for use with MapLike<T> objects. For Map<T> objects, use
     *       reduceProperties instead as it offers better performance.
     *
     * @param map The map-like to reduce
     * @param callback An aggregation function that is called for each entry in the map
     * @param initial The initial value for the reduction.
     */
    function reduceOwnProperties<T, U>(map: MapLike<T>, callback: (aggregate: U, value: T, key: string) => U, initial: U): U;
    /**
     * Performs a shallow equality comparison of the contents of two map-likes.
     *
     * @param left A map-like whose properties should be compared.
     * @param right A map-like whose properties should be compared.
     */
    function equalOwnProperties<T>(left: MapLike<T>, right: MapLike<T>, equalityComparer?: (left: T, right: T) => boolean): boolean;
    /**
     * Creates a map from the elements of an array.
     *
     * @param array the array of input elements.
     * @param makeKey a function that produces a key for a given element.
     *
     * This function makes no effort to avoid collisions; if any two elements produce
     * the same key with the given 'makeKey' function, then the element with the higher
     * index in the array will be the one associated with the produced key.
     */
    function arrayToMap<T>(array: T[], makeKey: (value: T) => string): Map<T>;
    function arrayToMap<T, U>(array: T[], makeKey: (value: T) => string, makeValue: (value: T) => U): Map<U>;
    function isEmpty<T>(map: Map<T>): boolean;
    function cloneMap<T>(map: Map<T>): Map<T>;
    function clone<T>(object: T): T;
    function extend<T1, T2>(first: T1, second: T2): T1 & T2;
    /**
     * Adds the value to an array of values associated with the key, and returns the array.
     * Creates the array if it does not already exist.
     */
    function multiMapAdd<V>(map: Map<V[]>, key: string | number, value: V): V[];
    /**
     * Removes a value from an array of values associated with the key.
     * Does not preserve the order of those values.
     * Does nothing if `key` is not in `map`, or `value` is not in `map[key]`.
     */
    function multiMapRemove<V>(map: Map<V[]>, key: string, value: V): void;
    /**
     * Tests whether a value is an array.
     */
    function isArray(value: any): value is any[];
    /** Does nothing. */
    function noop(): void;
    /** Throws an error because a function is not implemented. */
    function notImplemented(): never;
    function memoize<T>(callback: () => T): () => T;
    /**
     * High-order function, creates a function that executes a function composition.
     * For example, `chain(a, b)` is the equivalent of `x => ((a', b') => y => b'(a'(y)))(a(x), b(x))`
     *
     * @param args The functions to chain.
     */
    function chain<T, U>(...args: ((t: T) => (u: U) => U)[]): (t: T) => (u: U) => U;
    /**
     * High-order function, composes functions. Note that functions are composed inside-out;
     * for example, `compose(a, b)` is the equivalent of `x => b(a(x))`.
     *
     * @param args The functions to compose.
     */
    function compose<T>(...args: ((t: T) => T)[]): (t: T) => T;
    let localizedDiagnosticMessages: Map<string>;
    function getLocaleSpecificMessage(message: DiagnosticMessage): string;
    function createFileDiagnostic(file: SourceFile, start: number, length: number, message: DiagnosticMessage, ...args: (string | number)[]): Diagnostic;
    function formatMessage(_dummy: any, message: DiagnosticMessage): string;
    function createCompilerDiagnostic(message: DiagnosticMessage, ...args: (string | number)[]): Diagnostic;
    function createCompilerDiagnosticFromMessageChain(chain: DiagnosticMessageChain): Diagnostic;
    function chainDiagnosticMessages(details: DiagnosticMessageChain, message: DiagnosticMessage, ...args: any[]): DiagnosticMessageChain;
    function concatenateDiagnosticMessageChains(headChain: DiagnosticMessageChain, tailChain: DiagnosticMessageChain): DiagnosticMessageChain;
    function compareValues<T>(a: T, b: T): Comparison;
    function compareStrings(a: string, b: string, ignoreCase?: boolean): Comparison;
    function compareStringsCaseInsensitive(a: string, b: string): Comparison;
    function compareDiagnostics(d1: Diagnostic, d2: Diagnostic): Comparison;
    function sortAndDeduplicateDiagnostics(diagnostics: Diagnostic[]): Diagnostic[];
    function deduplicateSortedDiagnostics(diagnostics: Diagnostic[]): Diagnostic[];
    function normalizeSlashes(path: string): string;
    /**
     * Returns length of path root (i.e. length of "/", "x:/", "//server/share/, file:///user/files")
    */
    function getRootLength(path: string): number;
    /**
     * Internally, we represent paths as strings with '/' as the directory separator.
     * When we make system calls (eg: LanguageServiceHost.getDirectory()),
     * we expect the host to correctly handle paths in our specified format.
     */
    const directorySeparator = "/";
    function normalizePath(path: string): string;
    /** A path ending with '/' refers to a directory only, never a file. */
    function pathEndsWithDirectorySeparator(path: string): boolean;
    /**
     * Returns the path except for its basename. Eg:
     *
     * /path/to/file.ext -> /path/to
     */
    function getDirectoryPath(path: Path): Path;
    function getDirectoryPath(path: string): string;
    function isUrl(path: string): boolean;
    function isExternalModuleNameRelative(moduleName: string): boolean;
    function getEmitScriptTarget(compilerOptions: CompilerOptions): ScriptTarget;
    function getEmitModuleKind(compilerOptions: CompilerOptions): ModuleKind;
    function hasZeroOrOneAsteriskCharacter(str: string): boolean;
    function isRootedDiskPath(path: string): boolean;
    function convertToRelativePath(absoluteOrRelativePath: string, basePath: string, getCanonicalFileName: (path: string) => string): string;
    function getNormalizedPathComponents(path: string, currentDirectory: string): string[];
    function getNormalizedAbsolutePath(fileName: string, currentDirectory: string): string;
    function getNormalizedPathFromPathComponents(pathComponents: string[]): string;
    function getRelativePathToDirectoryOrUrl(directoryPathOrUrl: string, relativeOrAbsolutePath: string, currentDirectory: string, getCanonicalFileName: (fileName: string) => string, isAbsolutePathAnUrl: boolean): string;
    function getBaseFileName(path: string): string;
    function combinePaths(path1: string, path2: string): string;
    /**
     * Removes a trailing directory separator from a path.
     * @param path The path.
     */
    function removeTrailingDirectorySeparator(path: string): string;
    /**
     * Adds a trailing directory separator to a path, if it does not already have one.
     * @param path The path.
     */
    function ensureTrailingDirectorySeparator(path: string): string;
    function comparePaths(a: string, b: string, currentDirectory: string, ignoreCase?: boolean): Comparison;
    function containsPath(parent: string, child: string, currentDirectory: string, ignoreCase?: boolean): boolean;
    function startsWith(str: string, prefix: string): boolean;
    function endsWith(str: string, suffix: string): boolean;
    function hasExtension(fileName: string): boolean;
    function fileExtensionIs(path: string, extension: string): boolean;
    function fileExtensionIsAny(path: string, extensions: string[]): boolean;
    function getRegularExpressionForWildcard(specs: string[], basePath: string, usage: "files" | "directories" | "exclude"): string;
    /**
     * An "includes" path "foo" is implicitly a glob "foo/** /*" (without the space) if its last component has no extension,
     * and does not contain any glob characters itself.
     */
    function isImplicitGlob(lastPathComponent: string): boolean;
    interface FileSystemEntries {
        files: string[];
        directories: string[];
    }
    interface FileMatcherPatterns {
        includeFilePattern: string;
        includeDirectoryPattern: string;
        excludePattern: string;
        basePaths: string[];
    }
    function getFileMatcherPatterns(path: string, excludes: string[], includes: string[], useCaseSensitiveFileNames: boolean, currentDirectory: string): FileMatcherPatterns;
    function matchFiles(path: string, extensions: string[], excludes: string[], includes: string[], useCaseSensitiveFileNames: boolean, currentDirectory: string, getFileSystemEntries: (path: string) => FileSystemEntries): string[];
    function ensureScriptKind(fileName: string, scriptKind?: ScriptKind): ScriptKind;
    function getScriptKindFromFileName(fileName: string): ScriptKind;
    /**
     *  List of supported extensions in order of file resolution precedence.
     */
    const supportedTypeScriptExtensions: string[];
    /** Must have ".d.ts" first because if ".ts" goes first, that will be detected as the extension instead of ".d.ts". */
    const supportedTypescriptExtensionsForExtractExtension: string[];
    const supportedJavascriptExtensions: string[];
    function getSupportedExtensions(options?: CompilerOptions): string[];
    function hasJavaScriptFileExtension(fileName: string): boolean;
    function hasTypeScriptFileExtension(fileName: string): boolean;
    function isSupportedSourceFileName(fileName: string, compilerOptions?: CompilerOptions): boolean;
    /**
     * Extension boundaries by priority. Lower numbers indicate higher priorities, and are
     * aligned to the offset of the highest priority extension in the
     * allSupportedExtensions array.
     */
    enum ExtensionPriority {
        TypeScriptFiles = 0,
        DeclarationAndJavaScriptFiles = 2,
        Limit = 5,
        Highest = 0,
        Lowest = 2,
    }
    function getExtensionPriority(path: string, supportedExtensions: string[]): ExtensionPriority;
    /**
     * Adjusts an extension priority to be the highest priority within the same range.
     */
    function adjustExtensionPriority(extensionPriority: ExtensionPriority): ExtensionPriority;
    /**
     * Gets the next lowest extension priority for a given priority.
     */
    function getNextLowestExtensionPriority(extensionPriority: ExtensionPriority): ExtensionPriority;
    function removeFileExtension(path: string): string;
    function tryRemoveExtension(path: string, extension: string): string | undefined;
    function removeExtension(path: string, extension: string): string;
    function changeExtension<T extends string | Path>(path: T, newExtension: string): T;
    interface ObjectAllocator {
        getNodeConstructor(): new (kind: SyntaxKind, pos?: number, end?: number) => Node;
        getTokenConstructor(): new <TKind extends SyntaxKind>(kind: TKind, pos?: number, end?: number) => Token<TKind>;
        getIdentifierConstructor(): new (kind: SyntaxKind.Identifier, pos?: number, end?: number) => Identifier;
        getSourceFileConstructor(): new (kind: SyntaxKind.SourceFile, pos?: number, end?: number) => SourceFile;
        getSymbolConstructor(): new (flags: SymbolFlags, name: string) => Symbol;
        getTypeConstructor(): new (checker: TypeChecker, flags: TypeFlags) => Type;
        getSignatureConstructor(): new (checker: TypeChecker) => Signature;
    }
    let objectAllocator: ObjectAllocator;
    enum AssertionLevel {
        None = 0,
        Normal = 1,
        Aggressive = 2,
        VeryAggressive = 3,
    }
    namespace Debug {
        let currentAssertionLevel: AssertionLevel;
        function shouldAssert(level: AssertionLevel): boolean;
        function assert(expression: boolean, message?: string, verboseDebugInfo?: () => string): void;
        function fail(message?: string): void;
    }
    /** Remove an item from an array, moving everything to its right one space left. */
    function orderedRemoveItem<T>(array: T[], item: T): boolean;
    /** Remove an item by index from an array, moving everything to its right one space left. */
    function orderedRemoveItemAt<T>(array: T[], index: number): void;
    function unorderedRemoveItemAt<T>(array: T[], index: number): void;
    /** Remove the *first* occurrence of `item` from the array. */
    function unorderedRemoveItem<T>(array: T[], item: T): void;
    function createGetCanonicalFileName(useCaseSensitiveFileNames: boolean): (fileName: string) => string;
    /**
     * patternStrings contains both pattern strings (containing "*") and regular strings.
     * Return an exact match if possible, or a pattern match, or undefined.
     * (These are verified by verifyCompilerOptions to have 0 or 1 "*" characters.)
     */
    function matchPatternOrExact(patternStrings: string[], candidate: string): string | Pattern | undefined;
    function patternText({prefix, suffix}: Pattern): string;
    /**
     * Given that candidate matches pattern, returns the text matching the '*'.
     * E.g.: matchedText(tryParsePattern("foo*baz"), "foobarbaz") === "bar"
     */
    function matchedText(pattern: Pattern, candidate: string): string;
    /** Return the object corresponding to the best pattern to match `candidate`. */
    function findBestPatternMatch<T>(values: T[], getPattern: (value: T) => Pattern, candidate: string): T | undefined;
    function tryParsePattern(pattern: string): Pattern | undefined;
    function positionIsSynthesized(pos: number): boolean;
    /** True if an extension is one of the supported TypeScript extensions. */
    function extensionIsTypeScript(ext: Extension): boolean;
    /**
     * Gets the extension from a path.
     * Path must have a valid extension.
     */
    function extensionFromPath(path: string): Extension;
    function tryGetExtensionFromPath(path: string): Extension | undefined;
}
declare namespace ts {
    type FileWatcherCallback = (fileName: string, removed?: boolean) => void;
    type DirectoryWatcherCallback = (fileName: string) => void;
    interface WatchedFile {
        fileName: string;
        callback: FileWatcherCallback;
        mtime?: Date;
    }
    interface System {
        args: string[];
        newLine: string;
        useCaseSensitiveFileNames: boolean;
        write(s: string): void;
        readFile(path: string, encoding?: string): string;
        getFileSize?(path: string): number;
        writeFile(path: string, data: string, writeByteOrderMark?: boolean): void;
        /**
         * @pollingInterval - this parameter is used in polling-based watchers and ignored in watchers that
         * use native OS file watching
         */
        watchFile?(path: string, callback: FileWatcherCallback, pollingInterval?: number): FileWatcher;
        watchDirectory?(path: string, callback: DirectoryWatcherCallback, recursive?: boolean): FileWatcher;
        resolvePath(path: string): string;
        fileExists(path: string): boolean;
        directoryExists(path: string): boolean;
        createDirectory(path: string): void;
        getExecutingFilePath(): string;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        readDirectory(path: string, extensions?: string[], exclude?: string[], include?: string[]): string[];
        getModifiedTime?(path: string): Date;
        createHash?(data: string): string;
        getMemoryUsage?(): number;
        exit(exitCode?: number): void;
        realpath?(path: string): string;
        getEnvironmentVariable(name: string): string;
        tryEnableSourceMapsForHost?(): void;
        setTimeout?(callback: (...args: any[]) => void, ms: number, ...args: any[]): any;
        clearTimeout?(timeoutId: any): void;
    }
    interface FileWatcher {
        close(): void;
    }
    interface DirectoryWatcher extends FileWatcher {
        directoryName: string;
        referenceCount: number;
    }
    let sys: System;
}
declare namespace ts {
    const externalHelpersModuleNameText = "tslib";
    interface ReferencePathMatchResult {
        fileReference?: FileReference;
        diagnosticMessage?: DiagnosticMessage;
        isNoDefaultLib?: boolean;
        isTypeReferenceDirective?: boolean;
    }
    function getDeclarationOfKind(symbol: Symbol, kind: SyntaxKind): Declaration;
    interface StringSymbolWriter extends SymbolWriter {
        string(): string;
    }
    function getSingleLineStringWriter(): StringSymbolWriter;
    function releaseStringWriter(writer: StringSymbolWriter): void;
    function getFullWidth(node: Node): number;
    function hasResolvedModule(sourceFile: SourceFile, moduleNameText: string): boolean;
    function getResolvedModule(sourceFile: SourceFile, moduleNameText: string): ResolvedModuleFull;
    function setResolvedModule(sourceFile: SourceFile, moduleNameText: string, resolvedModule: ResolvedModuleFull): void;
    function setResolvedTypeReferenceDirective(sourceFile: SourceFile, typeReferenceDirectiveName: string, resolvedTypeReferenceDirective: ResolvedTypeReferenceDirective): void;
    function moduleResolutionIsEqualTo(oldResolution: ResolvedModuleFull, newResolution: ResolvedModuleFull): boolean;
    function typeDirectiveIsEqualTo(oldResolution: ResolvedTypeReferenceDirective, newResolution: ResolvedTypeReferenceDirective): boolean;
    function hasChangesInResolutions<T>(names: string[], newResolutions: T[], oldResolutions: Map<T>, comparer: (oldResolution: T, newResolution: T) => boolean): boolean;
    function containsParseError(node: Node): boolean;
    function getSourceFileOfNode(node: Node): SourceFile;
    function isStatementWithLocals(node: Node): boolean;
    function getStartPositionOfLine(line: number, sourceFile: SourceFile): number;
    function nodePosToString(node: Node): string;
    function getStartPosOfNode(node: Node): number;
    function isDefined(value: any): boolean;
    function getEndLinePosition(line: number, sourceFile: SourceFile): number;
    function nodeIsMissing(node: Node): boolean;
    function nodeIsPresent(node: Node): boolean;
    function getTokenPosOfNode(node: Node, sourceFile?: SourceFile, includeJsDocComment?: boolean): number;
    function isJSDocNode(node: Node): boolean;
    function isJSDocTag(node: Node): boolean;
    function getNonDecoratorTokenPosOfNode(node: Node, sourceFile?: SourceFile): number;
    function getSourceTextOfNodeFromSourceFile(sourceFile: SourceFile, node: Node, includeTrivia?: boolean): string;
    function getTextOfNodeFromSourceText(sourceText: string, node: Node): string;
    function getTextOfNode(node: Node, includeTrivia?: boolean): string;
    function getLiteralText(node: LiteralLikeNode, sourceFile: SourceFile, languageVersion: ScriptTarget): string;
    function isBinaryOrOctalIntegerLiteral(node: LiteralLikeNode, text: string): boolean;
    function escapeIdentifier(identifier: string): string;
    function unescapeIdentifier(identifier: string): string;
    function makeIdentifierFromModuleName(moduleName: string): string;
    function isBlockOrCatchScoped(declaration: Declaration): boolean;
    function isCatchClauseVariableDeclarationOrBindingElement(declaration: Declaration): boolean;
    function isAmbientModule(node: Node): boolean;
    /** Given a symbol for a module, checks that it is either an untyped import or a shorthand ambient module. */
    function isShorthandAmbientModuleSymbol(moduleSymbol: Symbol): boolean;
    function isBlockScopedContainerTopLevel(node: Node): boolean;
    function isGlobalScopeAugmentation(module: ModuleDeclaration): boolean;
    function isExternalModuleAugmentation(node: Node): boolean;
    function isBlockScope(node: Node, parentNode: Node): boolean;
    function getEnclosingBlockScopeContainer(node: Node): Node;
    function declarationNameToString(name: DeclarationName): string;
    function getTextOfPropertyName(name: PropertyName): string;
    function entityNameToString(name: EntityNameOrEntityNameExpression): string;
    function createDiagnosticForNode(node: Node, message: DiagnosticMessage, arg0?: string | number, arg1?: string | number, arg2?: string | number): Diagnostic;
    function createDiagnosticForNodeInSourceFile(sourceFile: SourceFile, node: Node, message: DiagnosticMessage, arg0?: string | number, arg1?: string | number, arg2?: string | number): Diagnostic;
    function createDiagnosticForNodeFromMessageChain(node: Node, messageChain: DiagnosticMessageChain): Diagnostic;
    function getSpanOfTokenAtPosition(sourceFile: SourceFile, pos: number): TextSpan;
    function getErrorSpanForNode(sourceFile: SourceFile, node: Node): TextSpan;
    function isExternalOrCommonJsModule(file: SourceFile): boolean;
    function isDeclarationFile(file: SourceFile): boolean;
    function isConstEnumDeclaration(node: Node): boolean;
    function isConst(node: Node): boolean;
    function isLet(node: Node): boolean;
    function isSuperCall(n: Node): n is SuperCall;
    function isPrologueDirective(node: Node): node is PrologueDirective;
    function getLeadingCommentRangesOfNode(node: Node, sourceFileOfNode: SourceFile): CommentRange[];
    function getLeadingCommentRangesOfNodeFromText(node: Node, text: string): CommentRange[];
    function getJsDocComments(node: Node, sourceFileOfNode: SourceFile): CommentRange[];
    function getJsDocCommentsFromText(node: Node, text: string): CommentRange[];
    let fullTripleSlashReferencePathRegEx: RegExp;
    let fullTripleSlashReferenceTypeReferenceDirectiveRegEx: RegExp;
    let fullTripleSlashAMDReferencePathRegEx: RegExp;
    function isPartOfTypeNode(node: Node): boolean;
    function forEachReturnStatement<T>(body: Block, visitor: (stmt: ReturnStatement) => T): T;
    function forEachYieldExpression(body: Block, visitor: (expr: YieldExpression) => void): void;
    function isVariableLike(node: Node): node is VariableLikeDeclaration;
    function isAccessor(node: Node): node is AccessorDeclaration;
    function isClassLike(node: Node): node is ClassLikeDeclaration;
    function isFunctionLike(node: Node): node is FunctionLikeDeclaration;
    function isFunctionLikeKind(kind: SyntaxKind): boolean;
    function introducesArgumentsExoticObject(node: Node): boolean;
    function isIterationStatement(node: Node, lookInLabeledStatements: boolean): node is IterationStatement;
    function isFunctionBlock(node: Node): boolean;
    function isObjectLiteralMethod(node: Node): node is MethodDeclaration;
    function isObjectLiteralOrClassExpressionMethod(node: Node): node is MethodDeclaration;
    function isIdentifierTypePredicate(predicate: TypePredicate): predicate is IdentifierTypePredicate;
    function isThisTypePredicate(predicate: TypePredicate): predicate is ThisTypePredicate;
    function getContainingFunction(node: Node): FunctionLikeDeclaration;
    function getContainingClass(node: Node): ClassLikeDeclaration;
    function getThisContainer(node: Node, includeArrowFunctions: boolean): Node;
    /**
      * Given an super call/property node, returns the closest node where
      * - a super call/property access is legal in the node and not legal in the parent node the node.
      *   i.e. super call is legal in constructor but not legal in the class body.
      * - the container is an arrow function (so caller might need to call getSuperContainer again in case it needs to climb higher)
      * - a super call/property is definitely illegal in the container (but might be legal in some subnode)
      *   i.e. super property access is illegal in function declaration but can be legal in the statement list
      */
    function getSuperContainer(node: Node, stopOnFunctions: boolean): Node;
    function getImmediatelyInvokedFunctionExpression(func: Node): CallExpression;
    /**
     * Determines whether a node is a property or element access expression for super.
     */
    function isSuperProperty(node: Node): node is SuperProperty;
    function getEntityNameFromTypeNode(node: TypeNode): EntityNameOrEntityNameExpression;
    function isCallLikeExpression(node: Node): node is CallLikeExpression;
    function getInvokedExpression(node: CallLikeExpression): Expression;
    function nodeCanBeDecorated(node: Node): boolean;
    function nodeIsDecorated(node: Node): boolean;
    function nodeOrChildIsDecorated(node: Node): boolean;
    function childIsDecorated(node: Node): boolean;
    function isJSXTagName(node: Node): boolean;
    function isPartOfExpression(node: Node): boolean;
    function isInstantiatedModule(node: ModuleDeclaration, preserveConstEnums: boolean): boolean;
    function isExternalModuleImportEqualsDeclaration(node: Node): boolean;
    function getExternalModuleImportEqualsDeclarationExpression(node: Node): Expression;
    function isInternalModuleImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration;
    function isSourceFileJavaScript(file: SourceFile): boolean;
    function isInJavaScriptFile(node: Node): boolean;
    /**
     * Returns true if the node is a CallExpression to the identifier 'require' with
     * exactly one argument.
     * This function does not test if the node is in a JavaScript file or not.
    */
    function isRequireCall(expression: Node, checkArgumentIsStringLiteral: boolean): expression is CallExpression;
    function isSingleOrDoubleQuote(charCode: number): boolean;
    /**
     * Returns true if the node is a variable declaration whose initializer is a function expression.
     * This function does not test if the node is in a JavaScript file or not.
     */
    function isDeclarationOfFunctionExpression(s: Symbol): boolean;
    function getSpecialPropertyAssignmentKind(expression: Node): SpecialPropertyAssignmentKind;
    function getExternalModuleName(node: Node): Expression;
    function getNamespaceDeclarationNode(node: ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration): ImportEqualsDeclaration | NamespaceImport;
    function isDefaultImport(node: ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration): boolean;
    function hasQuestionToken(node: Node): boolean;
    function isJSDocConstructSignature(node: Node): boolean;
    function getJSDocComments(node: Node, checkParentVariableStatement: boolean): string[];
    function getJSDocTypeTag(node: Node): JSDocTypeTag;
    function getJSDocReturnTag(node: Node): JSDocReturnTag;
    function getJSDocTemplateTag(node: Node): JSDocTemplateTag;
    function getCorrespondingJSDocParameterTag(parameter: ParameterDeclaration): JSDocParameterTag;
    function hasRestParameter(s: SignatureDeclaration): boolean;
    function hasDeclaredRestParameter(s: SignatureDeclaration): boolean;
    function isRestParameter(node: ParameterDeclaration): boolean;
    function isDeclaredRestParam(node: ParameterDeclaration): boolean;
    enum AssignmentKind {
        None = 0,
        Definite = 1,
        Compound = 2,
    }
    function getAssignmentTargetKind(node: Node): AssignmentKind;
    function isAssignmentTarget(node: Node): boolean;
    function isNodeDescendantOf(node: Node, ancestor: Node): boolean;
    function isInAmbientContext(node: Node): boolean;
    function isDeclarationName(name: Node): boolean;
    function isLiteralComputedPropertyDeclarationName(node: Node): boolean;
    function isIdentifierName(node: Identifier): boolean;
    function isAliasSymbolDeclaration(node: Node): boolean;
    function exportAssignmentIsAlias(node: ExportAssignment): boolean;
    function getClassExtendsHeritageClauseElement(node: ClassLikeDeclaration | InterfaceDeclaration): ExpressionWithTypeArguments;
    function getClassImplementsHeritageClauseElements(node: ClassLikeDeclaration): NodeArray<ExpressionWithTypeArguments>;
    function getInterfaceBaseTypeNodes(node: InterfaceDeclaration): NodeArray<ExpressionWithTypeArguments>;
    function getHeritageClause(clauses: NodeArray<HeritageClause>, kind: SyntaxKind): HeritageClause;
    function tryResolveScriptReference(host: ScriptReferenceHost, sourceFile: SourceFile, reference: FileReference): SourceFile;
    function getAncestor(node: Node, kind: SyntaxKind): Node;
    function getFileReferenceFromReferencePath(comment: string, commentRange: CommentRange): ReferencePathMatchResult;
    function isKeyword(token: SyntaxKind): boolean;
    function isTrivia(token: SyntaxKind): boolean;
    function isAsyncFunctionLike(node: Node): boolean;
    function isStringOrNumericLiteral(node: Node): node is StringLiteral | NumericLiteral;
    /**
     * A declaration has a dynamic name if both of the following are true:
     *   1. The declaration has a computed property name
     *   2. The computed name is *not* expressed as Symbol.<name>, where name
     *      is a property of the Symbol constructor that denotes a built in
     *      Symbol.
     */
    function hasDynamicName(declaration: Declaration): boolean;
    function isDynamicName(name: DeclarationName): boolean;
    /**
     * Checks if the expression is of the form:
     *    Symbol.name
     * where Symbol is literally the word "Symbol", and name is any identifierName
     */
    function isWellKnownSymbolSyntactically(node: Expression): boolean;
    function getPropertyNameForPropertyNameNode(name: DeclarationName | ParameterDeclaration): string;
    function getPropertyNameForKnownSymbolName(symbolName: string): string;
    /**
     * Includes the word "Symbol" with unicode escapes
     */
    function isESSymbolIdentifier(node: Node): boolean;
    function isPushOrUnshiftIdentifier(node: Identifier): boolean;
    function isModifierKind(token: SyntaxKind): boolean;
    function isParameterDeclaration(node: VariableLikeDeclaration): boolean;
    function getRootDeclaration(node: Node): Node;
    function nodeStartsNewLexicalEnvironment(node: Node): boolean;
    function nodeIsSynthesized(node: TextRange): boolean;
    function getOriginalNode(node: Node): Node;
    function getOriginalNode<T extends Node>(node: Node, nodeTest: (node: Node) => node is T): T;
    /**
     * Gets a value indicating whether a node originated in the parse tree.
     *
     * @param node The node to test.
     */
    function isParseTreeNode(node: Node): boolean;
    /**
     * Gets the original parse tree node for a node.
     *
     * @param node The original node.
     * @returns The original parse tree node if found; otherwise, undefined.
     */
    function getParseTreeNode(node: Node): Node;
    /**
     * Gets the original parse tree node for a node.
     *
     * @param node The original node.
     * @param nodeTest A callback used to ensure the correct type of parse tree node is returned.
     * @returns The original parse tree node if found; otherwise, undefined.
     */
    function getParseTreeNode<T extends Node>(node: Node, nodeTest?: (node: Node) => node is T): T;
    function getOriginalSourceFiles(sourceFiles: SourceFile[]): SourceFile[];
    function getOriginalNodeId(node: Node): number;
    enum Associativity {
        Left = 0,
        Right = 1,
    }
    function getExpressionAssociativity(expression: Expression): Associativity;
    function getOperatorAssociativity(kind: SyntaxKind, operator: SyntaxKind, hasArguments?: boolean): Associativity;
    function getExpressionPrecedence(expression: Expression): 0 | 1 | -1 | 2 | 4 | 3 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5;
    function getOperator(expression: Expression): SyntaxKind.Unknown | SyntaxKind.EndOfFileToken | SyntaxKind.SingleLineCommentTrivia | SyntaxKind.MultiLineCommentTrivia | SyntaxKind.NewLineTrivia | SyntaxKind.WhitespaceTrivia | SyntaxKind.ShebangTrivia | SyntaxKind.ConflictMarkerTrivia | SyntaxKind.NumericLiteral | SyntaxKind.StringLiteral | SyntaxKind.JsxText | SyntaxKind.RegularExpressionLiteral | SyntaxKind.NoSubstitutionTemplateLiteral | SyntaxKind.TemplateHead | SyntaxKind.TemplateMiddle | SyntaxKind.TemplateTail | SyntaxKind.OpenBraceToken | SyntaxKind.CloseBraceToken | SyntaxKind.OpenParenToken | SyntaxKind.CloseParenToken | SyntaxKind.OpenBracketToken | SyntaxKind.CloseBracketToken | SyntaxKind.DotToken | SyntaxKind.DotDotDotToken | SyntaxKind.SemicolonToken | SyntaxKind.CommaToken | SyntaxKind.LessThanToken | SyntaxKind.LessThanSlashToken | SyntaxKind.GreaterThanToken | SyntaxKind.LessThanEqualsToken | SyntaxKind.GreaterThanEqualsToken | SyntaxKind.EqualsEqualsToken | SyntaxKind.ExclamationEqualsToken | SyntaxKind.EqualsEqualsEqualsToken | SyntaxKind.ExclamationEqualsEqualsToken | SyntaxKind.EqualsGreaterThanToken | SyntaxKind.PlusToken | SyntaxKind.MinusToken | SyntaxKind.AsteriskToken | SyntaxKind.AsteriskAsteriskToken | SyntaxKind.SlashToken | SyntaxKind.PercentToken | SyntaxKind.PlusPlusToken | SyntaxKind.MinusMinusToken | SyntaxKind.LessThanLessThanToken | SyntaxKind.GreaterThanGreaterThanToken | SyntaxKind.GreaterThanGreaterThanGreaterThanToken | SyntaxKind.AmpersandToken | SyntaxKind.BarToken | SyntaxKind.CaretToken | SyntaxKind.ExclamationToken | SyntaxKind.TildeToken | SyntaxKind.AmpersandAmpersandToken | SyntaxKind.BarBarToken | SyntaxKind.QuestionToken | SyntaxKind.ColonToken | SyntaxKind.AtToken | SyntaxKind.EqualsToken | SyntaxKind.PlusEqualsToken | SyntaxKind.MinusEqualsToken | SyntaxKind.AsteriskEqualsToken | SyntaxKind.AsteriskAsteriskEqualsToken | SyntaxKind.SlashEqualsToken | SyntaxKind.PercentEqualsToken | SyntaxKind.LessThanLessThanEqualsToken | SyntaxKind.GreaterThanGreaterThanEqualsToken | SyntaxKind.GreaterThanGreaterThanGreaterThanEqualsToken | SyntaxKind.AmpersandEqualsToken | SyntaxKind.BarEqualsToken | SyntaxKind.CaretEqualsToken | SyntaxKind.Identifier | SyntaxKind.BreakKeyword | SyntaxKind.CaseKeyword | SyntaxKind.CatchKeyword | SyntaxKind.ClassKeyword | SyntaxKind.ConstKeyword | SyntaxKind.ContinueKeyword | SyntaxKind.DebuggerKeyword | SyntaxKind.DefaultKeyword | SyntaxKind.DeleteKeyword | SyntaxKind.DoKeyword | SyntaxKind.ElseKeyword | SyntaxKind.EnumKeyword | SyntaxKind.ExportKeyword | SyntaxKind.ExtendsKeyword | SyntaxKind.FalseKeyword | SyntaxKind.FinallyKeyword | SyntaxKind.ForKeyword | SyntaxKind.FunctionKeyword | SyntaxKind.IfKeyword | SyntaxKind.ImportKeyword | SyntaxKind.InKeyword | SyntaxKind.InstanceOfKeyword | SyntaxKind.NewKeyword | SyntaxKind.NullKeyword | SyntaxKind.ReturnKeyword | SyntaxKind.SuperKeyword | SyntaxKind.SwitchKeyword | SyntaxKind.ThisKeyword | SyntaxKind.ThrowKeyword | SyntaxKind.TrueKeyword | SyntaxKind.TryKeyword | SyntaxKind.TypeOfKeyword | SyntaxKind.VarKeyword | SyntaxKind.VoidKeyword | SyntaxKind.WhileKeyword | SyntaxKind.WithKeyword | SyntaxKind.ImplementsKeyword | SyntaxKind.InterfaceKeyword | SyntaxKind.LetKeyword | SyntaxKind.PackageKeyword | SyntaxKind.PrivateKeyword | SyntaxKind.ProtectedKeyword | SyntaxKind.PublicKeyword | SyntaxKind.StaticKeyword | SyntaxKind.YieldKeyword | SyntaxKind.AbstractKeyword | SyntaxKind.AsKeyword | SyntaxKind.AnyKeyword | SyntaxKind.AsyncKeyword | SyntaxKind.AwaitKeyword | SyntaxKind.BooleanKeyword | SyntaxKind.ConstructorKeyword | SyntaxKind.DeclareKeyword | SyntaxKind.GetKeyword | SyntaxKind.IsKeyword | SyntaxKind.KeyOfKeyword | SyntaxKind.ModuleKeyword | SyntaxKind.NamespaceKeyword | SyntaxKind.NeverKeyword | SyntaxKind.ReadonlyKeyword | SyntaxKind.RequireKeyword | SyntaxKind.NumberKeyword | SyntaxKind.SetKeyword | SyntaxKind.StringKeyword | SyntaxKind.SymbolKeyword | SyntaxKind.TypeKeyword | SyntaxKind.UndefinedKeyword | SyntaxKind.FromKeyword | SyntaxKind.GlobalKeyword | SyntaxKind.OfKeyword | SyntaxKind.QualifiedName | SyntaxKind.ComputedPropertyName | SyntaxKind.TypeParameter | SyntaxKind.Parameter | SyntaxKind.Decorator | SyntaxKind.PropertySignature | SyntaxKind.PropertyDeclaration | SyntaxKind.MethodSignature | SyntaxKind.MethodDeclaration | SyntaxKind.Constructor | SyntaxKind.GetAccessor | SyntaxKind.SetAccessor | SyntaxKind.CallSignature | SyntaxKind.ConstructSignature | SyntaxKind.IndexSignature | SyntaxKind.TypePredicate | SyntaxKind.TypeReference | SyntaxKind.FunctionType | SyntaxKind.ConstructorType | SyntaxKind.TypeQuery | SyntaxKind.TypeLiteral | SyntaxKind.ArrayType | SyntaxKind.TupleType | SyntaxKind.UnionType | SyntaxKind.IntersectionType | SyntaxKind.ParenthesizedType | SyntaxKind.ThisType | SyntaxKind.TypeOperator | SyntaxKind.IndexedAccessType | SyntaxKind.MappedType | SyntaxKind.LiteralType | SyntaxKind.ObjectBindingPattern | SyntaxKind.ArrayBindingPattern | SyntaxKind.BindingElement | SyntaxKind.ArrayLiteralExpression | SyntaxKind.ObjectLiteralExpression | SyntaxKind.PropertyAccessExpression | SyntaxKind.ElementAccessExpression | SyntaxKind.CallExpression | SyntaxKind.NewExpression | SyntaxKind.TaggedTemplateExpression | SyntaxKind.TypeAssertionExpression | SyntaxKind.ParenthesizedExpression | SyntaxKind.FunctionExpression | SyntaxKind.ArrowFunction | SyntaxKind.DeleteExpression | SyntaxKind.TypeOfExpression | SyntaxKind.VoidExpression | SyntaxKind.AwaitExpression | SyntaxKind.ConditionalExpression | SyntaxKind.TemplateExpression | SyntaxKind.YieldExpression | SyntaxKind.SpreadElement | SyntaxKind.ClassExpression | SyntaxKind.OmittedExpression | SyntaxKind.ExpressionWithTypeArguments | SyntaxKind.AsExpression | SyntaxKind.NonNullExpression | SyntaxKind.TemplateSpan | SyntaxKind.SemicolonClassElement | SyntaxKind.Block | SyntaxKind.VariableStatement | SyntaxKind.EmptyStatement | SyntaxKind.ExpressionStatement | SyntaxKind.IfStatement | SyntaxKind.DoStatement | SyntaxKind.WhileStatement | SyntaxKind.ForStatement | SyntaxKind.ForInStatement | SyntaxKind.ForOfStatement | SyntaxKind.ContinueStatement | SyntaxKind.BreakStatement | SyntaxKind.ReturnStatement | SyntaxKind.WithStatement | SyntaxKind.SwitchStatement | SyntaxKind.LabeledStatement | SyntaxKind.ThrowStatement | SyntaxKind.TryStatement | SyntaxKind.DebuggerStatement | SyntaxKind.VariableDeclaration | SyntaxKind.VariableDeclarationList | SyntaxKind.FunctionDeclaration | SyntaxKind.ClassDeclaration | SyntaxKind.InterfaceDeclaration | SyntaxKind.TypeAliasDeclaration | SyntaxKind.EnumDeclaration | SyntaxKind.ModuleDeclaration | SyntaxKind.ModuleBlock | SyntaxKind.CaseBlock | SyntaxKind.NamespaceExportDeclaration | SyntaxKind.ImportEqualsDeclaration | SyntaxKind.ImportDeclaration | SyntaxKind.ImportClause | SyntaxKind.NamespaceImport | SyntaxKind.NamedImports | SyntaxKind.ImportSpecifier | SyntaxKind.ExportAssignment | SyntaxKind.ExportDeclaration | SyntaxKind.NamedExports | SyntaxKind.ExportSpecifier | SyntaxKind.MissingDeclaration | SyntaxKind.ExternalModuleReference | SyntaxKind.JsxElement | SyntaxKind.JsxSelfClosingElement | SyntaxKind.JsxOpeningElement | SyntaxKind.JsxClosingElement | SyntaxKind.JsxAttribute | SyntaxKind.JsxSpreadAttribute | SyntaxKind.JsxExpression | SyntaxKind.CaseClause | SyntaxKind.DefaultClause | SyntaxKind.HeritageClause | SyntaxKind.CatchClause | SyntaxKind.PropertyAssignment | SyntaxKind.ShorthandPropertyAssignment | SyntaxKind.SpreadAssignment | SyntaxKind.EnumMember | SyntaxKind.SourceFile | SyntaxKind.JSDocTypeExpression | SyntaxKind.JSDocAllType | SyntaxKind.JSDocUnknownType | SyntaxKind.JSDocArrayType | SyntaxKind.JSDocUnionType | SyntaxKind.JSDocTupleType | SyntaxKind.JSDocNullableType | SyntaxKind.JSDocNonNullableType | SyntaxKind.JSDocRecordType | SyntaxKind.JSDocRecordMember | SyntaxKind.JSDocTypeReference | SyntaxKind.JSDocOptionalType | SyntaxKind.JSDocFunctionType | SyntaxKind.JSDocVariadicType | SyntaxKind.JSDocConstructorType | SyntaxKind.JSDocThisType | SyntaxKind.JSDocComment | SyntaxKind.JSDocTag | SyntaxKind.JSDocParameterTag | SyntaxKind.JSDocReturnTag | SyntaxKind.JSDocTypeTag | SyntaxKind.JSDocTemplateTag | SyntaxKind.JSDocTypedefTag | SyntaxKind.JSDocPropertyTag | SyntaxKind.JSDocTypeLiteral | SyntaxKind.JSDocLiteralType | SyntaxKind.JSDocNullKeyword | SyntaxKind.JSDocUndefinedKeyword | SyntaxKind.JSDocNeverKeyword | SyntaxKind.SyntaxList | SyntaxKind.NotEmittedStatement | SyntaxKind.PartiallyEmittedExpression | SyntaxKind.MergeDeclarationMarker | SyntaxKind.EndOfDeclarationMarker | SyntaxKind.RawExpression | SyntaxKind.Count;
    function getOperatorPrecedence(nodeKind: SyntaxKind, operatorKind: SyntaxKind, hasArguments?: boolean): 0 | 1 | -1 | 2 | 4 | 3 | 19 | 18 | 17 | 16 | 15 | 14 | 13 | 12 | 11 | 10 | 9 | 8 | 7 | 6 | 5;
    function createDiagnosticCollection(): DiagnosticCollection;
    /**
     * Based heavily on the abstract 'Quote'/'QuoteJSONString' operation from ECMA-262 (24.3.2.2),
     * but augmented for a few select characters (e.g. lineSeparator, paragraphSeparator, nextLine)
     * Note that this doesn't actually wrap the input in double quotes.
     */
    function escapeString(s: string): string;
    function isIntrinsicJsxName(name: string): boolean;
    function escapeNonAsciiCharacters(s: string): string;
    interface EmitTextWriter {
        write(s: string): void;
        writeTextOfNode(text: string, node: Node): void;
        writeLine(): void;
        increaseIndent(): void;
        decreaseIndent(): void;
        getText(): string;
        rawWrite(s: string): void;
        writeLiteral(s: string): void;
        getTextPos(): number;
        getLine(): number;
        getColumn(): number;
        getIndent(): number;
        isAtStartOfLine(): boolean;
        reset(): void;
    }
    function getIndentString(level: number): string;
    function getIndentSize(): number;
    function createTextWriter(newLine: String): EmitTextWriter;
    function getResolvedExternalModuleName(host: EmitHost, file: SourceFile): string;
    function getExternalModuleNameFromDeclaration(host: EmitHost, resolver: EmitResolver, declaration: ImportEqualsDeclaration | ImportDeclaration | ExportDeclaration | ModuleDeclaration): string;
    /**
     * Resolves a local path to a path which is absolute to the base of the emit
     */
    function getExternalModuleNameFromPath(host: EmitHost, fileName: string): string;
    function getOwnEmitOutputFilePath(sourceFile: SourceFile, host: EmitHost, extension: string): string;
    function getDeclarationEmitOutputFilePath(sourceFile: SourceFile, host: EmitHost): string;
    interface EmitFileNames {
        jsFilePath: string;
        sourceMapFilePath: string;
        declarationFilePath: string;
    }
    /**
     * Gets the source files that are expected to have an emit output.
     *
     * Originally part of `forEachExpectedEmitFile`, this functionality was extracted to support
     * transformations.
     *
     * @param host An EmitHost.
     * @param targetSourceFile An optional target source file to emit.
     */
    function getSourceFilesToEmit(host: EmitHost, targetSourceFile?: SourceFile): SourceFile[];
    /** Don't call this for `--outFile`, just for `--outDir` or plain emit. */
    function filterSourceFilesInDirectory(sourceFiles: SourceFile[], isSourceFileFromExternalLibrary: (file: SourceFile) => boolean): SourceFile[];
    /**
     * Iterates over each source file to emit. The source files are expected to have been
     * transformed for use by the pretty printer.
     *
     * Originally part of `forEachExpectedEmitFile`, this functionality was extracted to support
     * transformations.
     *
     * @param host An EmitHost.
     * @param sourceFiles The transformed source files to emit.
     * @param action The action to execute.
     */
    function forEachTransformedEmitFile(host: EmitHost, sourceFiles: SourceFile[], action: (jsFilePath: string, sourceMapFilePath: string, declarationFilePath: string, sourceFiles: SourceFile[], isBundledEmit: boolean) => void, emitOnlyDtsFiles?: boolean): void;
    /**
     * Iterates over the source files that are expected to have an emit output. This function
     * is used by the legacy emitter and the declaration emitter and should not be used by
     * the tree transforming emitter.
     *
     * @param host An EmitHost.
     * @param action The action to execute.
     * @param targetSourceFile An optional target source file to emit.
     */
    function forEachExpectedEmitFile(host: EmitHost, action: (emitFileNames: EmitFileNames, sourceFiles: SourceFile[], isBundledEmit: boolean, emitOnlyDtsFiles: boolean) => void, targetSourceFile?: SourceFile, emitOnlyDtsFiles?: boolean): void;
    function getSourceFilePathInNewDir(sourceFile: SourceFile, host: EmitHost, newDirPath: string): string;
    function writeFile(host: EmitHost, diagnostics: DiagnosticCollection, fileName: string, data: string, writeByteOrderMark: boolean, sourceFiles?: SourceFile[]): void;
    function getLineOfLocalPosition(currentSourceFile: SourceFile, pos: number): number;
    function getLineOfLocalPositionFromLineMap(lineMap: number[], pos: number): number;
    function getFirstConstructorWithBody(node: ClassLikeDeclaration): ConstructorDeclaration;
    /** Get the type annotaion for the value parameter. */
    function getSetAccessorTypeAnnotationNode(accessor: SetAccessorDeclaration): TypeNode;
    function getThisParameter(signature: SignatureDeclaration): ParameterDeclaration | undefined;
    function parameterIsThisKeyword(parameter: ParameterDeclaration): boolean;
    function isThisIdentifier(node: Node | undefined): boolean;
    function identifierIsThisKeyword(id: Identifier): boolean;
    interface AllAccessorDeclarations {
        firstAccessor: AccessorDeclaration;
        secondAccessor: AccessorDeclaration;
        getAccessor: AccessorDeclaration;
        setAccessor: AccessorDeclaration;
    }
    function getAllAccessorDeclarations(declarations: NodeArray<Declaration>, accessor: AccessorDeclaration): AllAccessorDeclarations;
    function emitNewLineBeforeLeadingComments(lineMap: number[], writer: EmitTextWriter, node: TextRange, leadingComments: CommentRange[]): void;
    function emitNewLineBeforeLeadingCommentsOfPosition(lineMap: number[], writer: EmitTextWriter, pos: number, leadingComments: CommentRange[]): void;
    function emitNewLineBeforeLeadingCommentOfPosition(lineMap: number[], writer: EmitTextWriter, pos: number, commentPos: number): void;
    function emitComments(text: string, lineMap: number[], writer: EmitTextWriter, comments: CommentRange[], leadingSeparator: boolean, trailingSeparator: boolean, newLine: string, writeComment: (text: string, lineMap: number[], writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string) => void): void;
    /**
     * Detached comment is a comment at the top of file or function body that is separated from
     * the next statement by space.
     */
    function emitDetachedComments(text: string, lineMap: number[], writer: EmitTextWriter, writeComment: (text: string, lineMap: number[], writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string) => void, node: TextRange, newLine: string, removeComments: boolean): {
        nodePos: number;
        detachedCommentEndPos: number;
    };
    function writeCommentRange(text: string, lineMap: number[], writer: EmitTextWriter, commentPos: number, commentEnd: number, newLine: string): void;
    function hasModifiers(node: Node): boolean;
    function hasModifier(node: Node, flags: ModifierFlags): boolean;
    function getModifierFlags(node: Node): ModifierFlags;
    function modifierToFlag(token: SyntaxKind): ModifierFlags;
    function isLogicalOperator(token: SyntaxKind): boolean;
    function isAssignmentOperator(token: SyntaxKind): boolean;
    /** Get `C` given `N` if `N` is in the position `class C extends N` where `N` is an ExpressionWithTypeArguments. */
    function tryGetClassExtendingExpressionWithTypeArguments(node: Node): ClassLikeDeclaration | undefined;
    function isAssignmentExpression(node: Node, excludeCompoundAssignment: true): node is AssignmentExpression<EqualsToken>;
    function isAssignmentExpression(node: Node, excludeCompoundAssignment?: false): node is AssignmentExpression<AssignmentOperatorToken>;
    function isDestructuringAssignment(node: Node): node is DestructuringAssignment;
    function isSupportedExpressionWithTypeArguments(node: ExpressionWithTypeArguments): boolean;
    function isExpressionWithTypeArgumentsInClassExtendsClause(node: Node): boolean;
    function isEntityNameExpression(node: Expression): node is EntityNameExpression;
    function isRightSideOfQualifiedNameOrPropertyAccess(node: Node): boolean;
    function isEmptyObjectLiteralOrArrayLiteral(expression: Node): boolean;
    function getLocalSymbolForExportDefault(symbol: Symbol): Symbol;
    /** Return ".ts", ".d.ts", or ".tsx", if that is the extension. */
    function tryExtractTypeScriptExtension(fileName: string): string | undefined;
    /**
     * Serialize an object graph into a JSON string. This is intended only for use on an acyclic graph
     * as the fallback implementation does not check for circular references by default.
     */
    const stringify: (value: any) => string;
    /**
     * Converts a string to a base-64 encoded ASCII string.
     */
    function convertToBase64(input: string): string;
    function getNewLineCharacter(options: CompilerOptions): string;
    /**
     * Tests whether a node and its subtree is simple enough to have its position
     * information ignored when emitting source maps in a destructuring assignment.
     *
     * @param node The expression to test.
     */
    function isSimpleExpression(node: Expression): boolean;
    function formatSyntaxKind(kind: SyntaxKind): string;
    /**
     * Increases (or decreases) a position by the provided amount.
     *
     * @param pos The position.
     * @param value The delta.
     */
    function movePos(pos: number, value: number): number;
    /**
     * Creates a new TextRange from the provided pos and end.
     *
     * @param pos The start position.
     * @param end The end position.
     */
    function createRange(pos: number, end: number): TextRange;
    /**
     * Creates a new TextRange from a provided range with a new end position.
     *
     * @param range A TextRange.
     * @param end The new end position.
     */
    function moveRangeEnd(range: TextRange, end: number): TextRange;
    /**
     * Creates a new TextRange from a provided range with a new start position.
     *
     * @param range A TextRange.
     * @param pos The new Start position.
     */
    function moveRangePos(range: TextRange, pos: number): TextRange;
    /**
     * Moves the start position of a range past any decorators.
     */
    function moveRangePastDecorators(node: Node): TextRange;
    /**
     * Moves the start position of a range past any decorators or modifiers.
     */
    function moveRangePastModifiers(node: Node): TextRange;
    /**
     * Determines whether a TextRange has the same start and end positions.
     *
     * @param range A TextRange.
     */
    function isCollapsedRange(range: TextRange): boolean;
    /**
     * Creates a new TextRange from a provided range with its end position collapsed to its
     * start position.
     *
     * @param range A TextRange.
     */
    function collapseRangeToStart(range: TextRange): TextRange;
    /**
     * Creates a new TextRange from a provided range with its start position collapsed to its
     * end position.
     *
     * @param range A TextRange.
     */
    function collapseRangeToEnd(range: TextRange): TextRange;
    /**
     * Creates a new TextRange for a token at the provides start position.
     *
     * @param pos The start position.
     * @param token The token.
     */
    function createTokenRange(pos: number, token: SyntaxKind): TextRange;
    function rangeIsOnSingleLine(range: TextRange, sourceFile: SourceFile): boolean;
    function rangeStartPositionsAreOnSameLine(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeEndPositionsAreOnSameLine(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeStartIsOnSameLineAsRangeEnd(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function rangeEndIsOnSameLineAsRangeStart(range1: TextRange, range2: TextRange, sourceFile: SourceFile): boolean;
    function positionsAreOnSameLine(pos1: number, pos2: number, sourceFile: SourceFile): boolean;
    function getStartPositionOfRange(range: TextRange, sourceFile: SourceFile): number;
    /**
     * Determines whether a name was originally the declaration name of an enum or namespace
     * declaration.
     */
    function isDeclarationNameOfEnumOrNamespace(node: Identifier): boolean;
    function getInitializedVariables(node: VariableDeclarationList): VariableDeclaration[];
    /**
     * Gets a value indicating whether a node is merged with a class declaration in the same scope.
     */
    function isMergedWithClass(node: Node): boolean;
    /**
     * Gets a value indicating whether a node is the first declaration of its kind.
     *
     * @param node A Declaration node.
     * @param kind The SyntaxKind to find among related declarations.
     */
    function isFirstDeclarationOfKind(node: Node, kind: SyntaxKind): boolean;
    function isNodeArray<T extends Node>(array: T[]): array is NodeArray<T>;
    function isNoSubstitutionTemplateLiteral(node: Node): node is LiteralExpression;
    function isLiteralKind(kind: SyntaxKind): boolean;
    function isTextualLiteralKind(kind: SyntaxKind): boolean;
    function isLiteralExpression(node: Node): node is LiteralExpression;
    function isTemplateLiteralKind(kind: SyntaxKind): boolean;
    function isTemplateHead(node: Node): node is TemplateHead;
    function isTemplateMiddleOrTemplateTail(node: Node): node is TemplateMiddle | TemplateTail;
    function isIdentifier(node: Node): node is Identifier;
    function isGeneratedIdentifier(node: Node): node is GeneratedIdentifier;
    function isModifier(node: Node): node is Modifier;
    function isQualifiedName(node: Node): node is QualifiedName;
    function isComputedPropertyName(node: Node): node is ComputedPropertyName;
    function isEntityName(node: Node): node is EntityName;
    function isPropertyName(node: Node): node is PropertyName;
    function isModuleName(node: Node): node is ModuleName;
    function isBindingName(node: Node): node is BindingName;
    function isTypeParameter(node: Node): node is TypeParameterDeclaration;
    function isParameter(node: Node): node is ParameterDeclaration;
    function isDecorator(node: Node): node is Decorator;
    function isMethodDeclaration(node: Node): node is MethodDeclaration;
    function isClassElement(node: Node): node is ClassElement;
    function isObjectLiteralElementLike(node: Node): node is ObjectLiteralElementLike;
    /**
     * Node test that determines whether a node is a valid type node.
     * This differs from the `isPartOfTypeNode` function which determines whether a node is *part*
     * of a TypeNode.
     */
    function isTypeNode(node: Node): node is TypeNode;
    function isArrayBindingPattern(node: Node): node is ArrayBindingPattern;
    function isObjectBindingPattern(node: Node): node is ObjectBindingPattern;
    function isBindingPattern(node: Node): node is BindingPattern;
    function isAssignmentPattern(node: Node): node is AssignmentPattern;
    function isBindingElement(node: Node): node is BindingElement;
    function isArrayBindingElement(node: Node): node is ArrayBindingElement;
    /**
     * Determines whether the BindingOrAssignmentElement is a BindingElement-like declaration
     */
    function isDeclarationBindingElement(bindingElement: BindingOrAssignmentElement): bindingElement is VariableDeclaration | ParameterDeclaration | BindingElement;
    /**
     * Determines whether a node is a BindingOrAssignmentPattern
     */
    function isBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is BindingOrAssignmentPattern;
    /**
     * Determines whether a node is an ObjectBindingOrAssignmentPattern
     */
    function isObjectBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is ObjectBindingOrAssignmentPattern;
    /**
     * Determines whether a node is an ArrayBindingOrAssignmentPattern
     */
    function isArrayBindingOrAssignmentPattern(node: BindingOrAssignmentElementTarget): node is ArrayBindingOrAssignmentPattern;
    function isArrayLiteralExpression(node: Node): node is ArrayLiteralExpression;
    function isObjectLiteralExpression(node: Node): node is ObjectLiteralExpression;
    function isPropertyAccessExpression(node: Node): node is PropertyAccessExpression;
    function isElementAccessExpression(node: Node): node is ElementAccessExpression;
    function isBinaryExpression(node: Node): node is BinaryExpression;
    function isConditionalExpression(node: Node): node is ConditionalExpression;
    function isCallExpression(node: Node): node is CallExpression;
    function isTemplateLiteral(node: Node): node is TemplateLiteral;
    function isSpreadExpression(node: Node): node is SpreadElement;
    function isExpressionWithTypeArguments(node: Node): node is ExpressionWithTypeArguments;
    function isLeftHandSideExpression(node: Node): node is LeftHandSideExpression;
    function isUnaryExpression(node: Node): node is UnaryExpression;
    function isExpression(node: Node): node is Expression;
    function isAssertionExpression(node: Node): node is AssertionExpression;
    function isPartiallyEmittedExpression(node: Node): node is PartiallyEmittedExpression;
    function isNotEmittedStatement(node: Node): node is NotEmittedStatement;
    function isNotEmittedOrPartiallyEmittedNode(node: Node): node is NotEmittedStatement | PartiallyEmittedExpression;
    function isOmittedExpression(node: Node): node is OmittedExpression;
    function isTemplateSpan(node: Node): node is TemplateSpan;
    function isBlock(node: Node): node is Block;
    function isConciseBody(node: Node): node is ConciseBody;
    function isFunctionBody(node: Node): node is FunctionBody;
    function isForInitializer(node: Node): node is ForInitializer;
    function isVariableDeclaration(node: Node): node is VariableDeclaration;
    function isVariableDeclarationList(node: Node): node is VariableDeclarationList;
    function isCaseBlock(node: Node): node is CaseBlock;
    function isModuleBody(node: Node): node is ModuleBody;
    function isImportEqualsDeclaration(node: Node): node is ImportEqualsDeclaration;
    function isImportClause(node: Node): node is ImportClause;
    function isNamedImportBindings(node: Node): node is NamedImportBindings;
    function isImportSpecifier(node: Node): node is ImportSpecifier;
    function isNamedExports(node: Node): node is NamedExports;
    function isExportSpecifier(node: Node): node is ExportSpecifier;
    function isModuleOrEnumDeclaration(node: Node): node is ModuleDeclaration | EnumDeclaration;
    function isDeclaration(node: Node): node is Declaration;
    function isDeclarationStatement(node: Node): node is DeclarationStatement;
    /**
     * Determines whether the node is a statement that is not also a declaration
     */
    function isStatementButNotDeclaration(node: Node): node is Statement;
    function isStatement(node: Node): node is Statement;
    function isModuleReference(node: Node): node is ModuleReference;
    function isJsxOpeningElement(node: Node): node is JsxOpeningElement;
    function isJsxClosingElement(node: Node): node is JsxClosingElement;
    function isJsxTagNameExpression(node: Node): node is JsxTagNameExpression;
    function isJsxChild(node: Node): node is JsxChild;
    function isJsxAttributeLike(node: Node): node is JsxAttributeLike;
    function isJsxSpreadAttribute(node: Node): node is JsxSpreadAttribute;
    function isJsxAttribute(node: Node): node is JsxAttribute;
    function isStringLiteralOrJsxExpression(node: Node): node is StringLiteral | JsxExpression;
    function isCaseOrDefaultClause(node: Node): node is CaseOrDefaultClause;
    function isHeritageClause(node: Node): node is HeritageClause;
    function isCatchClause(node: Node): node is CatchClause;
    function isPropertyAssignment(node: Node): node is PropertyAssignment;
    function isShorthandPropertyAssignment(node: Node): node is ShorthandPropertyAssignment;
    function isEnumMember(node: Node): node is EnumMember;
    function isSourceFile(node: Node): node is SourceFile;
    function isWatchSet(options: CompilerOptions): boolean;
}
declare namespace ts {
    function getDefaultLibFileName(options: CompilerOptions): string;
    function textSpanEnd(span: TextSpan): number;
    function textSpanIsEmpty(span: TextSpan): boolean;
    function textSpanContainsPosition(span: TextSpan, position: number): boolean;
    function textSpanContainsTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlapsWith(span: TextSpan, other: TextSpan): boolean;
    function textSpanOverlap(span1: TextSpan, span2: TextSpan): TextSpan;
    function textSpanIntersectsWithTextSpan(span: TextSpan, other: TextSpan): boolean;
    function textSpanIntersectsWith(span: TextSpan, start: number, length: number): boolean;
    function decodedTextSpanIntersectsWith(start1: number, length1: number, start2: number, length2: number): boolean;
    function textSpanIntersectsWithPosition(span: TextSpan, position: number): boolean;
    function textSpanIntersection(span1: TextSpan, span2: TextSpan): TextSpan;
    function createTextSpan(start: number, length: number): TextSpan;
    function createTextSpanFromBounds(start: number, end: number): TextSpan;
    function textChangeRangeNewSpan(range: TextChangeRange): TextSpan;
    function textChangeRangeIsUnchanged(range: TextChangeRange): boolean;
    function createTextChangeRange(span: TextSpan, newLength: number): TextChangeRange;
    let unchangedTextChangeRange: TextChangeRange;
    /**
     * Called to merge all the changes that occurred across several versions of a script snapshot
     * into a single change.  i.e. if a user keeps making successive edits to a script we will
     * have a text change from V1 to V2, V2 to V3, ..., Vn.
     *
     * This function will then merge those changes into a single change range valid between V1 and
     * Vn.
     */
    function collapseTextChangeRangesAcrossMultipleVersions(changes: TextChangeRange[]): TextChangeRange;
    function getTypeParameterOwner(d: Declaration): Declaration;
    function isParameterPropertyDeclaration(node: ParameterDeclaration): boolean;
    function getCombinedModifierFlags(node: Node): ModifierFlags;
    function getCombinedNodeFlags(node: Node): NodeFlags;
}
declare namespace ts {
    const Diagnostics: {
        Unterminated_string_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Identifier_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_file_cannot_have_a_reference_to_itself: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Trailing_comma_not_allowed: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Asterisk_Slash_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unexpected_token: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_rest_parameter_must_be_last_in_a_parameter_list: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_cannot_have_question_mark_and_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_required_parameter_cannot_follow_an_optional_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_signature_cannot_have_a_rest_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_signature_parameter_cannot_have_an_accessibility_modifier: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_signature_parameter_cannot_have_a_question_mark: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_signature_parameter_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_signature_must_have_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_signature_parameter_must_have_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_signature_parameter_type_must_be_string_or_number: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        readonly_modifier_can_only_appear_on_a_property_declaration_or_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Accessibility_modifier_already_seen: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_must_precede_1_modifier: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_already_seen: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_appear_on_a_class_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        super_must_be_followed_by_an_argument_list_or_member_access: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Only_ambient_modules_can_use_quoted_names: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Statements_are_not_allowed_in_ambient_contexts: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_declare_modifier_cannot_be_used_in_an_already_ambient_context: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Initializers_are_not_allowed_in_ambient_contexts: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_be_used_in_an_ambient_context: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_be_used_with_a_class_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_be_used_here: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_appear_on_a_data_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_appear_on_a_module_or_namespace_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_0_modifier_cannot_be_used_with_an_interface_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_rest_parameter_cannot_be_optional: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_rest_parameter_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_set_accessor_must_have_exactly_one_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_set_accessor_cannot_have_an_optional_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_set_accessor_parameter_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_set_accessor_cannot_have_rest_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_get_accessor_cannot_have_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_a_valid_async_function_return_type_in_ES5_SlashES3_because_it_does_not_refer_to_a_Promise_compatible_constructor_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_async_function_or_method_must_have_a_valid_awaitable_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Operand_for_await_does_not_have_a_valid_callable_then_member: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_expression_in_async_function_does_not_have_a_valid_callable_then_member: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Expression_body_for_async_arrow_function_does_not_have_a_valid_callable_then_member: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enum_member_must_have_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_is_referenced_directly_or_indirectly_in_the_fulfillment_callback_of_its_own_then_method: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_export_assignment_cannot_be_used_in_a_namespace: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_return_type_of_an_async_function_or_method_must_be_the_global_Promise_T_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        In_ambient_enum_declarations_member_initializer_must_be_constant_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unexpected_token_A_constructor_method_accessor_or_property_was_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_appear_on_a_type_member: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_appear_on_an_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_0_modifier_cannot_be_used_with_an_import_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_reference_directive_syntax: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_accessor_cannot_be_declared_in_an_ambient_context: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_appear_on_a_constructor_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_appear_on_a_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameters_cannot_appear_on_a_constructor_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_annotation_cannot_appear_on_a_constructor_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_accessor_cannot_have_type_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_set_accessor_cannot_have_a_return_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_signature_must_have_exactly_one_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_argument_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_use_of_0_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        with_statements_are_not_allowed_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        delete_cannot_be_called_on_an_identifier_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Jump_target_cannot_cross_function_boundary: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_return_statement_can_only_be_used_within_a_function_body: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Expression_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_label_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_object_literal_cannot_have_property_and_accessor_with_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_export_assignment_cannot_have_modifiers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Octal_literals_are_not_allowed_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_tuple_type_element_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Variable_declaration_list_cannot_be_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Digit_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Hexadecimal_digit_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unexpected_end_of_text: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_character: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Declaration_or_statement_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Statement_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        case_or_default_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_or_signature_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enum_member_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Variable_declaration_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Argument_expression_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_assignment_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Expression_or_comma_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_declaration_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_declaration_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_argument_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        String_literal_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Line_break_not_permitted_here: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        or_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Declaration_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Import_declarations_in_a_namespace_cannot_reference_a_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_use_imports_exports_or_module_augmentations_when_module_is_none: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_name_0_differs_from_already_included_file_name_1_only_in_casing: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        const_declarations_must_be_initialized: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        const_declarations_can_only_be_declared_inside_a_block: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        let_declarations_can_only_be_declared_inside_a_block: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unterminated_template_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unterminated_regular_expression_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_object_member_cannot_be_declared_optional: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_yield_expression_is_only_allowed_in_a_generator_body: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Computed_property_names_are_not_allowed_in_enums: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_computed_property_name_in_an_ambient_context_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_computed_property_name_in_a_class_property_declaration_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_computed_property_name_in_a_method_overload_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_computed_property_name_in_an_interface_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_computed_property_name_in_a_type_literal_must_directly_refer_to_a_built_in_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_comma_expression_is_not_allowed_in_a_computed_property_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        extends_clause_already_seen: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        extends_clause_must_precede_implements_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Classes_can_only_extend_a_single_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        implements_clause_already_seen: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Interface_declaration_cannot_have_implements_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Binary_digit_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Octal_digit_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unexpected_token_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_destructuring_pattern_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Array_element_destructuring_pattern_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_destructuring_declaration_must_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_implementation_cannot_be_declared_in_ambient_contexts: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Modifiers_cannot_appear_here: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Merge_conflict_marker_encountered: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_rest_element_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_parameter_property_may_not_be_declared_using_a_binding_pattern: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Only_a_single_variable_declaration_is_allowed_in_a_for_of_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_variable_declaration_of_a_for_in_statement_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_variable_declaration_of_a_for_of_statement_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_import_declaration_cannot_have_modifiers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_has_no_default_export: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_export_declaration_cannot_have_modifiers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Export_declarations_are_not_permitted_in_a_namespace: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Catch_clause_variable_cannot_have_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Catch_clause_variable_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_extended_Unicode_escape_value_must_be_between_0x0_and_0x10FFFF_inclusive: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unterminated_Unicode_escape_sequence: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Line_terminator_not_permitted_before_arrow: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Import_assignment_cannot_be_used_when_targeting_ECMAScript_2015_modules_Consider_using_import_Asterisk_as_ns_from_mod_import_a_from_mod_import_d_from_mod_or_another_module_format_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Export_assignment_cannot_be_used_when_targeting_ECMAScript_2015_modules_Consider_using_export_default_or_another_module_format_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Decorators_are_not_valid_here: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Decorators_cannot_be_applied_to_multiple_get_Slashset_accessors_of_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_compile_namespaces_when_the_isolatedModules_flag_is_provided: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Ambient_const_enums_are_not_allowed_when_the_isolatedModules_flag_is_provided: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_class_declaration_without_the_default_modifier_must_have_a_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Identifier_expected_0_is_a_reserved_word_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Identifier_expected_0_is_a_reserved_word_in_strict_mode_Class_definitions_are_automatically_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Identifier_expected_0_is_a_reserved_word_in_strict_mode_Modules_are_automatically_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_use_of_0_Modules_are_automatically_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Export_assignment_is_not_supported_when_module_flag_is_system: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Experimental_support_for_decorators_is_a_feature_that_is_subject_to_change_in_a_future_release_Set_the_experimentalDecorators_option_to_remove_this_warning: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Generators_are_only_available_when_targeting_ECMAScript_2015_or_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Generators_are_not_allowed_in_an_ambient_context: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_overload_signature_cannot_be_declared_as_a_generator: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_tag_already_specified: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Signature_0_must_have_a_type_predicate: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_parameter_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_predicate_0_is_not_assignable_to_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_is_not_in_the_same_position_as_parameter_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_type_predicate_is_only_allowed_in_return_type_position_for_functions_and_methods: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_type_predicate_cannot_reference_a_rest_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_type_predicate_cannot_reference_element_0_in_a_binding_pattern: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_export_assignment_can_only_be_used_in_a_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_import_declaration_can_only_be_used_in_a_namespace_or_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_export_declaration_can_only_be_used_in_a_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_ambient_module_declaration_is_only_allowed_at_the_top_level_in_a_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_namespace_declaration_is_only_allowed_in_a_namespace_or_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_return_type_of_a_property_decorator_function_must_be_either_void_or_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_return_type_of_a_parameter_decorator_function_must_be_either_void_or_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unable_to_resolve_signature_of_class_decorator_when_called_as_an_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unable_to_resolve_signature_of_parameter_decorator_when_called_as_an_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unable_to_resolve_signature_of_property_decorator_when_called_as_an_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unable_to_resolve_signature_of_method_decorator_when_called_as_an_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        abstract_modifier_can_only_appear_on_a_class_method_or_property_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_modifier_cannot_be_used_with_1_modifier: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Abstract_methods_can_only_appear_within_an_abstract_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Method_0_cannot_have_an_implementation_because_it_is_marked_abstract: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_interface_property_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_type_literal_property_cannot_have_an_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_class_member_cannot_have_the_0_keyword: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_decorator_can_only_decorate_a_method_implementation_not_an_overload: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Class_definitions_are_automatically_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_declarations_are_not_allowed_inside_blocks_in_strict_mode_when_targeting_ES3_or_ES5_Modules_are_automatically_in_strict_mode: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_tag_cannot_be_used_independently_as_a_top_level_JSDoc_tag: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_const_initializer_in_an_ambient_context_must_be_a_string_or_numeric_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        with_statements_are_not_allowed_in_an_async_function_block: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        await_expression_is_only_allowed_within_an_async_function: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        can_only_be_used_in_an_object_literal_property_inside_a_destructuring_assignment: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_body_of_an_if_statement_cannot_be_the_empty_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Global_module_exports_may_only_appear_in_module_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Global_module_exports_may_only_appear_in_declaration_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Global_module_exports_may_only_appear_at_top_level: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_parameter_property_cannot_be_declared_using_a_rest_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_identifier_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Static_members_cannot_reference_class_type_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Circular_definition_of_import_alias_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_has_no_exported_member_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_0_is_not_a_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_module_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_has_already_exported_a_member_named_1_Consider_explicitly_re_exporting_to_resolve_the_ambiguity: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_recursively_references_itself_as_a_base_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_class_may_only_extend_another_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_interface_may_only_extend_a_class_or_another_interface: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_has_a_circular_constraint: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Generic_type_0_requires_1_type_argument_s: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_generic: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Global_type_0_must_be_a_class_or_interface_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Global_type_0_must_have_1_type_parameter_s: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_global_type_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Named_property_0_of_types_1_and_2_are_not_identical: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Interface_0_cannot_simultaneously_extend_types_1_and_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Excessive_stack_depth_comparing_types_0_and_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_assignable_to_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_redeclare_exported_variable_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_missing_in_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_private_in_type_1_but_not_in_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Types_of_property_0_are_incompatible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_optional_in_type_1_but_required_in_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Types_of_parameters_0_and_1_are_incompatible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Index_signature_is_missing_in_type_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Index_signatures_are_incompatible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        this_cannot_be_referenced_in_a_module_or_namespace_body: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        this_cannot_be_referenced_in_current_location: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        this_cannot_be_referenced_in_constructor_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        this_cannot_be_referenced_in_a_static_property_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        super_can_only_be_referenced_in_a_derived_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        super_cannot_be_referenced_in_constructor_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_does_not_exist_on_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_private_and_only_accessible_within_class_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_index_expression_argument_must_be_of_type_string_number_symbol_or_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_does_not_satisfy_the_constraint_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Argument_of_type_0_is_not_assignable_to_parameter_of_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Supplied_parameters_do_not_match_any_signature_of_call_target: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Untyped_function_calls_may_not_accept_type_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_invoke_an_expression_whose_type_lacks_a_call_signature_Type_0_has_no_compatible_call_signatures: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Only_a_void_function_can_be_called_with_the_new_keyword: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_cannot_be_converted_to_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Object_literal_may_only_specify_known_properties_and_0_does_not_exist_in_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_or_a_property_access: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_an_in_expression_must_be_of_type_any_string_number_or_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_an_assignment_expression_must_be_a_variable_or_a_property_access: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Operator_0_cannot_be_applied_to_types_1_and_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_lacks_ending_return_statement_and_return_type_does_not_include_undefined: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_parameter_property_is_only_allowed_in_a_constructor_implementation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_rest_parameter_must_be_of_an_array_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_cannot_be_referenced_in_its_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_string_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_number_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Constructors_for_derived_classes_must_contain_a_super_call: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_get_accessor_must_return_a_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Getter_and_setter_accessors_do_not_agree_in_visibility: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        get_and_set_accessor_must_have_the_same_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_signature_with_an_implementation_cannot_use_a_string_literal_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Overload_signatures_must_all_be_exported_or_non_exported: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Overload_signatures_must_all_be_ambient_or_non_ambient: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Overload_signatures_must_all_be_public_private_or_protected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Overload_signatures_must_all_be_optional_or_required: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_overload_must_be_static: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_overload_must_not_be_static: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_implementation_name_must_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Constructor_implementation_is_missing: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_implementation_is_missing_or_not_immediately_following_the_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Multiple_constructor_implementations_are_not_allowed: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_function_implementation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Overload_signature_is_not_compatible_with_function_implementation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Declaration_name_conflicts_with_built_in_global_identifier_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_a_for_in_statement_must_be_a_variable_or_a_property_access: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Setters_cannot_return_a_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_with_statement_is_not_supported_All_symbols_in_a_with_block_will_have_type_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_of_type_1_is_not_assignable_to_string_index_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Numeric_index_type_0_is_not_assignable_to_string_index_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Class_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Class_0_incorrectly_extends_base_class_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Class_static_side_0_incorrectly_extends_base_class_static_side_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Class_0_incorrectly_implements_interface_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_class_may_only_implement_another_class_or_interface: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Interface_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        All_declarations_of_0_must_have_identical_type_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Interface_0_incorrectly_extends_interface_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enum_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_namespace_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_namespace_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Ambient_modules_cannot_be_nested_in_other_modules_or_namespaces: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Ambient_module_declaration_cannot_specify_relative_module_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_is_hidden_by_a_local_declaration_with_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Import_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Import_or_export_declaration_in_an_ambient_module_declaration_cannot_reference_module_through_relative_module_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Import_declaration_conflicts_with_local_declaration_of_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Types_have_separate_declarations_of_a_private_property_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_protected_in_type_1_but_public_in_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Block_scoped_variable_0_used_before_its_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_redeclare_block_scoped_variable_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_enum_member_cannot_have_a_numeric_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Variable_0_is_used_before_being_assigned: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_alias_0_circularly_references_itself: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_alias_name_cannot_be_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_AMD_module_cannot_have_multiple_name_assignments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_has_no_property_1_and_no_string_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_has_no_property_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_an_array_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_rest_element_must_be_last_in_a_destructuring_pattern: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_computed_property_name_must_be_of_type_string_number_symbol_or_any: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        this_cannot_be_referenced_in_a_computed_property_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        super_cannot_be_referenced_in_a_computed_property_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_global_value_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_0_operator_cannot_be_applied_to_type_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Symbol_reference_does_not_refer_to_the_global_Symbol_constructor_object: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_computed_property_name_of_the_form_0_must_be_of_type_symbol: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_5_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enum_declarations_must_all_be_const_or_non_const: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        In_const_enum_declarations_member_initializer_must_be_constant_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_const_enum_member_can_only_be_accessed_using_a_string_literal: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        const_enum_member_initializer_was_evaluated_to_a_non_finite_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_does_not_exist_on_const_enum_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_initialize_outer_scoped_variable_0_in_the_same_scope_as_block_scoped_declaration_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_a_for_of_statement_cannot_use_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Export_declaration_conflicts_with_exported_declaration_of_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_a_for_of_statement_must_be_a_variable_or_a_property_access: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_must_have_a_Symbol_iterator_method_that_returns_an_iterator: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_iterator_must_have_a_next_method: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_type_returned_by_the_next_method_of_an_iterator_must_have_a_value_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_left_hand_side_of_a_for_in_statement_cannot_be_a_destructuring_pattern: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_redeclare_identifier_0_in_catch_clause: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Tuple_type_0_with_length_1_cannot_be_assigned_to_tuple_with_length_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Using_a_string_in_a_for_of_statement_is_only_supported_in_ECMAScript_5_and_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_an_array_type_or_a_string_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_arguments_object_cannot_be_referenced_in_an_arrow_function_in_ES3_and_ES5_Consider_using_a_standard_function_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_resolves_to_a_non_module_entity_and_cannot_be_imported_using_this_construct: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_uses_export_and_cannot_be_used_with_export_Asterisk: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_interface_can_only_extend_an_identifier_Slashqualified_name_with_optional_type_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_class_can_only_implement_an_identifier_Slashqualified_name_with_optional_type_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_rest_element_cannot_contain_a_binding_pattern: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_is_referenced_directly_or_indirectly_in_its_own_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_namespace_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_generator_cannot_have_a_void_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_is_referenced_directly_or_indirectly_in_its_own_base_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_a_constructor_function_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        No_base_constructor_has_the_specified_number_of_type_arguments: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Base_constructor_return_type_0_is_not_a_class_or_interface_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Base_constructors_must_all_have_the_same_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_create_an_instance_of_the_abstract_class_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Overload_signatures_must_all_be_abstract_or_non_abstract: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Abstract_method_0_in_class_1_cannot_be_accessed_via_super_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Classes_containing_abstract_methods_must_be_marked_abstract: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Non_abstract_class_0_does_not_implement_inherited_abstract_member_1_from_class_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        All_declarations_of_an_abstract_method_must_be_consecutive: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_assign_an_abstract_constructor_type_to_a_non_abstract_constructor_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_this_based_type_guard_is_not_compatible_with_a_parameter_based_type_guard: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_identifier_0_Compiler_uses_declaration_1_to_support_async_functions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Expression_resolves_to_variable_declaration_0_that_compiler_uses_to_support_async_functions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_arguments_object_cannot_be_referenced_in_an_async_function_or_method_in_ES3_and_ES5_Consider_using_a_standard_function_or_method: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        yield_expressions_cannot_be_used_in_a_parameter_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        await_expressions_cannot_be_used_in_a_parameter_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Initializer_provides_no_value_for_this_binding_element_and_the_binding_element_has_no_default_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_this_type_is_available_only_in_a_non_static_member_of_a_class_or_interface: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_inferred_type_of_0_references_an_inaccessible_this_type_A_type_annotation_is_necessary: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_module_cannot_have_multiple_default_exports: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_a_module_containing_async_functions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_incompatible_with_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Object_is_possibly_null: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Object_is_possibly_undefined: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Object_is_possibly_null_or_undefined: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_function_returning_never_cannot_have_a_reachable_end_point: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enum_type_0_has_members_with_initializers_that_are_not_literals: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_constrained_to_keyof_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_has_no_matching_index_signature_for_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_cannot_be_used_as_an_index_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_assign_to_0_because_it_is_not_a_variable: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_assign_to_0_because_it_is_a_constant_or_a_read_only_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_target_of_an_assignment_must_be_a_variable_or_a_property_access: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Index_signature_in_type_0_only_permits_reading: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_element_attributes_type_0_may_not_be_a_union_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_return_type_of_a_JSX_element_constructor_must_return_an_object_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_element_implicitly_has_type_any_because_the_global_type_JSX_Element_does_not_exist: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_in_type_1_is_not_assignable_to_type_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_element_type_0_does_not_have_any_construct_or_call_signatures: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_element_type_0_is_not_a_constructor_function_for_JSX_elements: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_of_JSX_spread_attribute_is_not_assignable_to_target_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_element_class_does_not_support_attributes_because_it_does_not_have_a_0_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_global_type_JSX_0_may_not_have_more_than_one_property: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_emit_namespaced_JSX_elements_in_React: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_member_initializer_in_a_enum_declaration_cannot_reference_members_declared_after_it_including_members_defined_in_other_enums: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Merged_declaration_0_cannot_include_a_default_export_declaration_Consider_adding_a_separate_export_default_0_declaration_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Non_abstract_class_expression_does_not_implement_inherited_abstract_member_0_from_class_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Exported_external_package_typings_file_cannot_contain_tripleslash_references_Please_contact_the_package_author_to_update_the_package_definition: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Exported_external_package_typings_file_0_is_not_a_module_Please_contact_the_package_author_to_update_the_package_definition: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_expressions_must_have_one_parent_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_provides_no_match_for_the_signature_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        super_is_only_allowed_in_members_of_object_literal_expressions_when_option_target_is_ES2015_or_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        super_can_only_be_referenced_in_members_of_derived_classes_or_object_literal_expressions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_export_0_Only_local_declarations_can_be_exported_from_a_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_name_0_Did_you_mean_the_static_member_1_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_name_0_Did_you_mean_the_instance_member_this_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_module_name_in_augmentation_module_0_cannot_be_found: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_module_name_in_augmentation_Module_0_resolves_to_an_untyped_module_at_1_which_cannot_be_augmented: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Exports_and_export_assignments_are_not_permitted_in_module_augmentations: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Imports_are_not_permitted_in_module_augmentations_Consider_moving_them_to_the_enclosing_external_module: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        export_modifier_cannot_be_applied_to_ambient_modules_and_module_augmentations_since_they_are_always_visible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Augmentations_for_the_global_scope_can_only_be_directly_nested_in_external_modules_or_ambient_module_declarations: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Augmentations_for_the_global_scope_should_have_declare_modifier_unless_they_appear_in_already_ambient_context: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_augment_module_0_because_it_resolves_to_a_non_module_entity: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_assign_a_0_constructor_type_to_a_1_constructor_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Constructor_of_class_0_is_private_and_only_accessible_within_the_class_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Constructor_of_class_0_is_protected_and_only_accessible_within_the_class_declaration: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_extend_a_class_0_Class_constructor_is_marked_as_private: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Accessors_must_both_be_abstract_or_non_abstract: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_type_predicate_s_type_must_be_assignable_to_its_parameter_s_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_comparable_to_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_function_that_is_called_with_the_new_keyword_cannot_have_a_this_type_that_is_void: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_this_parameter_must_be_the_first_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_constructor_cannot_have_a_this_parameter: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        get_and_set_accessor_must_have_the_same_this_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        this_implicitly_has_type_any_because_it_does_not_have_a_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_this_context_of_type_0_is_not_assignable_to_method_s_this_of_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_this_types_of_each_signature_are_incompatible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_refers_to_a_UMD_global_but_the_current_file_is_a_module_Consider_adding_an_import_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        All_declarations_of_0_must_have_identical_modifiers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_type_definition_file_for_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_extend_an_interface_0_Did_you_mean_implements: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_class_must_be_declared_after_its_base_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_import_path_cannot_end_with_a_0_extension_Consider_importing_1_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_is_a_primitive_but_1_is_a_wrapper_object_Prefer_using_0_when_possible: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_only_refers_to_a_type_but_is_being_used_as_a_value_here: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Namespace_0_has_no_exported_member_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Left_side_of_comma_operator_is_unused_and_has_no_side_effects: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_Object_type_is_assignable_to_very_few_other_types_Did_you_mean_to_use_the_any_type_instead: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_async_function_or_method_must_return_a_Promise_Make_sure_you_have_a_declaration_for_Promise_or_include_ES2015_in_your_lib_option: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Spread_types_may_only_be_created_from_object_types: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Rest_types_may_only_be_created_from_object_types: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_target_of_an_object_rest_assignment_must_be_a_variable_or_a_property_access: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Import_declaration_0_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_of_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_parameter_0_of_exported_function_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Implements_clause_of_exported_class_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Extends_clause_of_exported_class_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Exported_variable_0_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Exported_variable_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Public_static_property_0_of_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Public_property_0_of_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_of_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Return_type_of_exported_function_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_of_exported_function_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Exported_type_alias_0_has_or_is_using_private_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Default_export_of_the_module_has_or_is_using_private_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Conflicting_definitions_for_0_found_at_1_and_2_Consider_installing_a_specific_version_of_this_library_to_resolve_the_conflict: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_current_host_does_not_support_the_0_option: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_the_common_subdirectory_path_for_the_input_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_specification_cannot_end_in_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_specification_cannot_contain_multiple_recursive_directory_wildcards_Asterisk_Asterisk_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_read_file_0_Colon_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unsupported_file_encoding: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Failed_to_parse_file_0_Colon_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unknown_compiler_option_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Compiler_option_0_requires_a_value_of_type_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Could_not_write_file_0_Colon_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Option_project_cannot_be_mixed_with_source_files_on_a_command_line: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Option_isolatedModules_can_only_be_used_when_either_option_module_is_provided_or_option_target_is_ES2015_or_higher: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Option_0_can_only_be_used_when_either_option_inlineSourceMap_or_option_sourceMap_is_provided: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Option_0_cannot_be_specified_without_specifying_option_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Option_0_cannot_be_specified_with_option_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_tsconfig_json_file_is_already_defined_at_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_write_file_0_because_it_would_overwrite_input_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_write_file_0_because_it_would_be_overwritten_by_multiple_input_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_find_a_tsconfig_json_file_at_the_specified_directory_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_specified_path_does_not_exist_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_value_for_reactNamespace_0_is_not_a_valid_identifier: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Option_paths_cannot_be_used_without_specifying_baseUrl_option: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Pattern_0_can_have_at_most_one_Asterisk_character: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Substitution_0_in_pattern_1_in_can_have_at_most_one_Asterisk_character: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Substitutions_for_pattern_0_should_be_an_array: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Substitution_0_for_pattern_1_has_incorrect_type_expected_string_got_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_specification_cannot_contain_a_parent_directory_that_appears_after_a_recursive_directory_wildcard_Asterisk_Asterisk_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Substitutions_for_pattern_0_shouldn_t_be_an_empty_array: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Invalid_value_for_jsxFactory_0_is_not_a_valid_identifier_or_qualified_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Concatenate_and_emit_output_to_single_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Generates_corresponding_d_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Watch_input_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Redirect_output_structure_to_the_directory: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Do_not_erase_const_enum_declarations_in_generated_code: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Do_not_emit_outputs_if_any_errors_were_reported: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Do_not_emit_comments_to_output: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Do_not_emit_outputs: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Allow_default_imports_from_modules_with_no_default_export_This_does_not_affect_code_emit_just_typechecking: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Skip_type_checking_of_declaration_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES2015: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_module_code_generation_Colon_commonjs_amd_system_umd_or_es2015: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Print_this_message: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Print_the_compiler_s_version: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Compile_the_project_in_the_given_directory: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Syntax_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        options: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Examples_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Options_Colon: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Version_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Insert_command_line_options_and_files_from_a_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_change_detected_Starting_incremental_compilation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        KIND: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        FILE: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        VERSION: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        LOCATION: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        DIRECTORY: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        STRATEGY: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Compilation_complete_Watching_for_file_changes: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Generates_corresponding_map_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Compiler_option_0_expects_an_argument: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unterminated_quoted_string_in_response_file_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Argument_for_0_option_must_be_Colon_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unsupported_locale_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unable_to_open_file_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Corrupted_locale_file_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Raise_error_on_expressions_and_declarations_with_an_implied_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_0_not_found: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_0_has_unsupported_extension_The_only_supported_extensions_are_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Do_not_emit_declarations_for_code_that_has_an_internal_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_the_root_directory_of_input_files_Use_to_control_the_output_directory_structure_with_outDir: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_0_is_not_under_rootDir_1_rootDir_is_expected_to_contain_all_source_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_the_end_of_line_sequence_to_be_used_when_emitting_files_Colon_CRLF_dos_or_LF_unix: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        NEWLINE: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Option_0_can_only_be_specified_in_tsconfig_json_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enables_experimental_support_for_ES7_decorators: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enables_experimental_support_for_emitting_type_metadata_for_decorators: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enables_experimental_support_for_ES7_async_functions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_module_resolution_strategy_Colon_node_Node_js_or_classic_TypeScript_pre_1_6: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Initializes_a_TypeScript_project_and_creates_a_tsconfig_json_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Successfully_created_a_tsconfig_json_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Suppress_excess_property_checks_for_object_literals: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Stylize_errors_and_messages_using_color_and_context_experimental: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Do_not_report_errors_on_unused_labels: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Report_error_when_not_all_code_paths_in_function_return_a_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Report_errors_for_fallthrough_cases_in_switch_statement: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Do_not_report_errors_on_unreachable_code: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Disallow_inconsistently_cased_references_to_the_same_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_library_files_to_be_included_in_the_compilation_Colon: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_JSX_code_generation_Colon_preserve_or_react: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Only_amd_and_system_modules_are_supported_alongside_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Base_directory_to_resolve_non_absolute_module_names: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_the_object_invoked_for_createElement_and_spread_when_targeting_react_JSX_emit: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enable_tracing_of_the_name_resolution_process: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_module_0_from_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Explicitly_specified_module_resolution_kind_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_resolution_kind_is_not_specified_using_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_name_0_was_successfully_resolved_to_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_name_0_was_not_resolved: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        paths_option_is_specified_looking_for_a_pattern_to_match_module_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_name_0_matched_pattern_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Trying_substitution_0_candidate_module_location_Colon_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_module_name_0_relative_to_base_url_1_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Loading_module_as_file_Slash_folder_candidate_module_location_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_0_does_not_exist: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_0_exist_use_it_as_a_name_resolution_result: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Loading_module_0_from_node_modules_folder: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Found_package_json_at_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        package_json_does_not_have_a_types_or_main_field: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        package_json_has_0_field_1_that_references_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Allow_javascript_files_to_be_compiled: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Option_0_should_have_array_of_strings_as_a_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Checking_if_0_is_the_longest_matching_prefix_for_1_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Expected_type_of_0_field_in_package_json_to_be_string_got_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        baseUrl_option_is_set_to_0_using_this_value_to_resolve_non_relative_module_name_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        rootDirs_option_is_set_using_it_to_resolve_relative_module_name_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Longest_matching_prefix_for_0_is_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Loading_0_from_the_root_dir_1_candidate_location_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Trying_other_entries_in_rootDirs: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_resolution_using_rootDirs_has_failed: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Do_not_emit_use_strict_directives_in_module_output: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Enable_strict_null_checks: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unknown_option_excludes_Did_you_mean_exclude: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Raise_error_on_this_expressions_with_an_implied_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_type_reference_directive_0_containing_file_1_root_directory_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_using_primary_search_paths: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_from_node_modules_folder: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_reference_directive_0_was_successfully_resolved_to_1_primary_Colon_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_reference_directive_0_was_not_resolved: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_with_primary_search_path_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Root_directory_cannot_be_determined_skipping_primary_search_paths: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_type_reference_directive_0_containing_file_1_root_directory_not_set: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_declaration_files_to_be_included_in_compilation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Looking_up_in_node_modules_folder_initial_location_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Containing_file_is_not_specified_and_root_directory_cannot_be_determined_skipping_lookup_in_node_modules_folder: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_type_reference_directive_0_containing_file_not_set_root_directory_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_type_reference_directive_0_containing_file_not_set_root_directory_not_set: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_config_file_0_found_doesn_t_contain_any_source_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Resolving_real_path_for_0_result_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_compile_modules_using_option_0_unless_the_module_flag_is_amd_or_system: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        File_name_0_has_a_1_extension_stripping_it: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_is_declared_but_never_used: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Report_errors_on_unused_locals: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Report_errors_on_unused_parameters: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_maximum_dependency_depth_to_search_under_node_modules_and_load_JavaScript_files: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        No_types_specified_in_package_json_so_returning_main_value_of_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_is_declared_but_never_used: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Import_emit_helpers_from_tslib: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Auto_discovery_for_typings_is_enabled_in_project_0_Running_extra_resolution_pass_for_module_1_using_cache_location_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parse_in_strict_mode_and_emit_use_strict_for_each_source_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_was_resolved_to_1_but_jsx_is_not_set: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_was_resolved_to_1_but_allowJs_is_not_set: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_was_resolved_as_locally_declared_ambient_module_in_file_1: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Module_0_was_resolved_as_ambient_module_declared_in_1_since_this_file_was_not_modified: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Specify_the_JSX_factory_function_to_use_when_targeting_react_JSX_emit_e_g_React_createElement_or_h: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Variable_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Parameter_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Member_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Element_implicitly_has_an_any_type_because_index_expression_is_not_of_type_number: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Could_not_find_a_declaration_file_for_module_0_1_implicitly_has_an_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Element_implicitly_has_an_any_type_because_type_0_has_no_index_signature: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Object_literal_s_property_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Rest_parameter_0_implicitly_has_an_any_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_implicitly_has_type_any_because_it_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Generator_implicitly_has_type_0_because_it_does_not_yield_any_values_Consider_supplying_a_return_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_element_implicitly_has_type_any_because_no_interface_JSX_0_exists: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unreachable_code_detected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unused_label: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Fallthrough_case_in_switch: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Not_all_code_paths_return_a_value: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Binding_element_0_implicitly_has_an_1_type: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_parameter_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Property_0_implicitly_has_type_any_because_its_get_accessor_lacks_a_return_type_annotation: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Variable_0_implicitly_has_type_1_in_some_locations_where_its_type_cannot_be_determined: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        You_cannot_rename_this_element: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        import_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        export_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        type_parameter_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        implements_clauses_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        interface_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        module_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        type_aliases_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        _0_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        types_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        type_arguments_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        parameter_modifiers_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        enum_declarations_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        type_assertion_expressions_can_only_be_used_in_a_ts_file: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Only_identifiers_Slashqualified_names_with_optional_type_arguments_are_currently_supported_in_a_class_extends_clauses: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        class_expressions_are_not_currently_supported: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Language_service_is_disabled: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_attributes_must_only_be_assigned_a_non_empty_expression: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_elements_cannot_have_multiple_attributes_with_the_same_name: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Expected_corresponding_JSX_closing_tag_for_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_attribute_expected: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Cannot_use_JSX_unless_the_jsx_flag_is_provided: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_constructor_cannot_contain_a_super_call_when_its_class_extends_null: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        An_unary_expression_with_the_0_operator_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_type_assertion_expression_is_not_allowed_in_the_left_hand_side_of_an_exponentiation_expression_Consider_enclosing_the_expression_in_parentheses: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        JSX_element_0_has_no_corresponding_closing_tag: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        super_must_be_called_before_accessing_this_in_the_constructor_of_a_derived_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Unknown_typing_option_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Circularity_detected_while_resolving_configuration_Colon_0: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        A_path_in_an_extends_option_must_be_relative_or_rooted_but_0_is_not: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        The_files_list_in_config_file_0_is_empty: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        No_inputs_were_found_in_config_file_0_Specified_include_paths_were_1_and_exclude_paths_were_2: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Add_missing_super_call: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Make_super_call_the_first_statement_in_the_constructor: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Change_extends_to_implements: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Remove_unused_identifiers: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Implement_interface_on_reference: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Implement_interface_on_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Implement_inherited_abstract_class: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Adding_a_tsconfig_json_file_will_help_organize_projects_that_contain_both_TypeScript_and_JavaScript_files_Learn_more_at_https_Colon_Slash_Slashaka_ms_Slashtsconfig: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
        Type_0_is_not_assignable_to_type_1_Two_different_types_with_this_name_exist_but_they_are_unrelated: {
            code: number;
            category: DiagnosticCategory;
            key: string;
            message: string;
        };
    };
}
declare namespace ts {
    interface ErrorCallback {
        (message: DiagnosticMessage, length: number): void;
    }
    function tokenIsIdentifierOrKeyword(token: SyntaxKind): boolean;
    interface Scanner {
        getStartPos(): number;
        getToken(): SyntaxKind;
        getTextPos(): number;
        getTokenPos(): number;
        getTokenText(): string;
        getTokenValue(): string;
        hasExtendedUnicodeEscape(): boolean;
        hasPrecedingLineBreak(): boolean;
        isIdentifier(): boolean;
        isReservedWord(): boolean;
        isUnterminated(): boolean;
        reScanGreaterToken(): SyntaxKind;
        reScanSlashToken(): SyntaxKind;
        reScanTemplateToken(): SyntaxKind;
        scanJsxIdentifier(): SyntaxKind;
        scanJsxAttributeValue(): SyntaxKind;
        reScanJsxToken(): SyntaxKind;
        scanJsxToken(): SyntaxKind;
        scanJSDocToken(): SyntaxKind;
        scan(): SyntaxKind;
        getText(): string;
        setText(text: string, start?: number, length?: number): void;
        setOnError(onError: ErrorCallback): void;
        setScriptTarget(scriptTarget: ScriptTarget): void;
        setLanguageVariant(variant: LanguageVariant): void;
        setTextPos(textPos: number): void;
        lookAhead<T>(callback: () => T): T;
        scanRange<T>(start: number, length: number, callback: () => T): T;
        tryScan<T>(callback: () => T): T;
    }
    function isUnicodeIdentifierStart(code: number, languageVersion: ScriptTarget): boolean;
    function tokenToString(t: SyntaxKind): string;
    function stringToToken(s: string): SyntaxKind;
    function computeLineStarts(text: string): number[];
    function getPositionOfLineAndCharacter(sourceFile: SourceFile, line: number, character: number): number;
    function computePositionOfLineAndCharacter(lineStarts: number[], line: number, character: number): number;
    function getLineStarts(sourceFile: SourceFile): number[];
    /**
     * We assume the first line starts at position 0 and 'position' is non-negative.
     */
    function computeLineAndCharacterOfPosition(lineStarts: number[], position: number): {
        line: number;
        character: number;
    };
    function getLineAndCharacterOfPosition(sourceFile: SourceFile, position: number): LineAndCharacter;
    function isWhiteSpace(ch: number): boolean;
    /** Does not include line breaks. For that, see isWhiteSpaceLike. */
    function isWhiteSpaceSingleLine(ch: number): boolean;
    function isLineBreak(ch: number): boolean;
    function isOctalDigit(ch: number): boolean;
    function couldStartTrivia(text: string, pos: number): boolean;
    function skipTrivia(text: string, pos: number, stopAfterLineBreak?: boolean, stopAtComments?: boolean): number;
    function forEachLeadingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: SyntaxKind, hasTrailingNewLine: boolean, state: T) => U, state?: T): U;
    function forEachTrailingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: SyntaxKind, hasTrailingNewLine: boolean, state: T) => U, state?: T): U;
    function reduceEachLeadingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: SyntaxKind, hasTrailingNewLine: boolean, state: T, memo: U) => U, state: T, initial: U): U;
    function reduceEachTrailingCommentRange<T, U>(text: string, pos: number, cb: (pos: number, end: number, kind: SyntaxKind, hasTrailingNewLine: boolean, state: T, memo: U) => U, state: T, initial: U): U;
    function getLeadingCommentRanges(text: string, pos: number): CommentRange[];
    function getTrailingCommentRanges(text: string, pos: number): CommentRange[];
    /** Optionally, get the shebang */
    function getShebang(text: string): string;
    function isIdentifierStart(ch: number, languageVersion: ScriptTarget): boolean;
    function isIdentifierPart(ch: number, languageVersion: ScriptTarget): boolean;
    function isIdentifierText(name: string, languageVersion: ScriptTarget): boolean;
    function createScanner(languageVersion: ScriptTarget, skipTrivia: boolean, languageVariant?: LanguageVariant, text?: string, onError?: ErrorCallback, start?: number, length?: number): Scanner;
}
declare namespace ts {
    function updateNode<T extends Node>(updated: T, original: T): T;
    function createNodeArray<T extends Node>(elements?: T[], location?: TextRange, hasTrailingComma?: boolean): NodeArray<T>;
    function createSynthesizedNode(kind: SyntaxKind, startsOnNewLine?: boolean): Node;
    function createSynthesizedNodeArray<T extends Node>(elements?: T[]): NodeArray<T>;
    /**
     * Creates a shallow, memberwise clone of a node with no source map location.
     */
    function getSynthesizedClone<T extends Node>(node: T): T;
    /**
     * Creates a shallow, memberwise clone of a node for mutation.
     */
    function getMutableClone<T extends Node>(node: T): T;
    function createLiteral(textSource: StringLiteral | NumericLiteral | Identifier, location?: TextRange): StringLiteral;
    function createLiteral(value: string, location?: TextRange): StringLiteral;
    function createLiteral(value: number, location?: TextRange): NumericLiteral;
    function createLiteral(value: boolean, location?: TextRange): BooleanLiteral;
    function createLiteral(value: string | number | boolean, location?: TextRange): PrimaryExpression;
    function createIdentifier(text: string, location?: TextRange): Identifier;
    function createTempVariable(recordTempVariable: ((node: Identifier) => void) | undefined, location?: TextRange): Identifier;
    function createLoopVariable(location?: TextRange): Identifier;
    function createUniqueName(text: string, location?: TextRange): Identifier;
    function getGeneratedNameForNode(node: Node, location?: TextRange): Identifier;
    function createToken<TKind extends SyntaxKind>(token: TKind): Token<TKind>;
    function createSuper(): PrimaryExpression;
    function createThis(location?: TextRange): PrimaryExpression;
    function createNull(): PrimaryExpression;
    function createComputedPropertyName(expression: Expression, location?: TextRange): ComputedPropertyName;
    function updateComputedPropertyName(node: ComputedPropertyName, expression: Expression): ComputedPropertyName;
    function createParameter(decorators: Decorator[], modifiers: Modifier[], dotDotDotToken: DotDotDotToken, name: string | Identifier | BindingPattern, questionToken?: QuestionToken, type?: TypeNode, initializer?: Expression, location?: TextRange, flags?: NodeFlags): ParameterDeclaration;
    function updateParameter(node: ParameterDeclaration, decorators: Decorator[], modifiers: Modifier[], dotDotDotToken: DotDotDotToken, name: BindingName, type: TypeNode, initializer: Expression): ParameterDeclaration;
    function createProperty(decorators: Decorator[], modifiers: Modifier[], name: string | PropertyName, questionToken: QuestionToken, type: TypeNode, initializer: Expression, location?: TextRange): PropertyDeclaration;
    function updateProperty(node: PropertyDeclaration, decorators: Decorator[], modifiers: Modifier[], name: PropertyName, type: TypeNode, initializer: Expression): PropertyDeclaration;
    function createMethod(decorators: Decorator[], modifiers: Modifier[], asteriskToken: AsteriskToken, name: string | PropertyName, typeParameters: TypeParameterDeclaration[], parameters: ParameterDeclaration[], type: TypeNode, body: Block, location?: TextRange, flags?: NodeFlags): MethodDeclaration;
    function updateMethod(node: MethodDeclaration, decorators: Decorator[], modifiers: Modifier[], name: PropertyName, typeParameters: TypeParameterDeclaration[], parameters: ParameterDeclaration[], type: TypeNode, body: Block): MethodDeclaration;
    function createConstructor(decorators: Decorator[], modifiers: Modifier[], parameters: ParameterDeclaration[], body: Block, location?: TextRange, flags?: NodeFlags): ConstructorDeclaration;
    function updateConstructor(node: ConstructorDeclaration, decorators: Decorator[], modifiers: Modifier[], parameters: ParameterDeclaration[], body: Block): ConstructorDeclaration;
    function createGetAccessor(decorators: Decorator[], modifiers: Modifier[], name: string | PropertyName, parameters: ParameterDeclaration[], type: TypeNode, body: Block, location?: TextRange, flags?: NodeFlags): GetAccessorDeclaration;
    function updateGetAccessor(node: GetAccessorDeclaration, decorators: Decorator[], modifiers: Modifier[], name: PropertyName, parameters: ParameterDeclaration[], type: TypeNode, body: Block): GetAccessorDeclaration;
    function createSetAccessor(decorators: Decorator[], modifiers: Modifier[], name: string | PropertyName, parameters: ParameterDeclaration[], body: Block, location?: TextRange, flags?: NodeFlags): SetAccessorDeclaration;
    function updateSetAccessor(node: SetAccessorDeclaration, decorators: Decorator[], modifiers: Modifier[], name: PropertyName, parameters: ParameterDeclaration[], body: Block): SetAccessorDeclaration;
    function createObjectBindingPattern(elements: BindingElement[], location?: TextRange): ObjectBindingPattern;
    function updateObjectBindingPattern(node: ObjectBindingPattern, elements: BindingElement[]): ObjectBindingPattern;
    function createArrayBindingPattern(elements: ArrayBindingElement[], location?: TextRange): ArrayBindingPattern;
    function updateArrayBindingPattern(node: ArrayBindingPattern, elements: ArrayBindingElement[]): ArrayBindingPattern;
    function createBindingElement(propertyName: string | PropertyName, dotDotDotToken: DotDotDotToken, name: string | BindingName, initializer?: Expression, location?: TextRange): BindingElement;
    function updateBindingElement(node: BindingElement, dotDotDotToken: DotDotDotToken, propertyName: PropertyName, name: BindingName, initializer: Expression): BindingElement;
    function createArrayLiteral(elements?: Expression[], location?: TextRange, multiLine?: boolean): ArrayLiteralExpression;
    function updateArrayLiteral(node: ArrayLiteralExpression, elements: Expression[]): ArrayLiteralExpression;
    function createObjectLiteral(properties?: ObjectLiteralElementLike[], location?: TextRange, multiLine?: boolean): ObjectLiteralExpression;
    function updateObjectLiteral(node: ObjectLiteralExpression, properties: ObjectLiteralElementLike[]): ObjectLiteralExpression;
    function createPropertyAccess(expression: Expression, name: string | Identifier, location?: TextRange, flags?: NodeFlags): PropertyAccessExpression;
    function updatePropertyAccess(node: PropertyAccessExpression, expression: Expression, name: Identifier): PropertyAccessExpression;
    function createElementAccess(expression: Expression, index: number | Expression, location?: TextRange): ElementAccessExpression;
    function updateElementAccess(node: ElementAccessExpression, expression: Expression, argumentExpression: Expression): ElementAccessExpression;
    function createCall(expression: Expression, typeArguments: TypeNode[], argumentsArray: Expression[], location?: TextRange, flags?: NodeFlags): CallExpression;
    function updateCall(node: CallExpression, expression: Expression, typeArguments: TypeNode[], argumentsArray: Expression[]): CallExpression;
    function createNew(expression: Expression, typeArguments: TypeNode[], argumentsArray: Expression[], location?: TextRange, flags?: NodeFlags): NewExpression;
    function updateNew(node: NewExpression, expression: Expression, typeArguments: TypeNode[], argumentsArray: Expression[]): NewExpression;
    function createTaggedTemplate(tag: Expression, template: TemplateLiteral, location?: TextRange): TaggedTemplateExpression;
    function updateTaggedTemplate(node: TaggedTemplateExpression, tag: Expression, template: TemplateLiteral): TaggedTemplateExpression;
    function createParen(expression: Expression, location?: TextRange): ParenthesizedExpression;
    function updateParen(node: ParenthesizedExpression, expression: Expression): ParenthesizedExpression;
    function createFunctionExpression(modifiers: Modifier[], asteriskToken: AsteriskToken, name: string | Identifier, typeParameters: TypeParameterDeclaration[], parameters: ParameterDeclaration[], type: TypeNode, body: Block, location?: TextRange, flags?: NodeFlags): FunctionExpression;
    function updateFunctionExpression(node: FunctionExpression, modifiers: Modifier[], name: Identifier, typeParameters: TypeParameterDeclaration[], parameters: ParameterDeclaration[], type: TypeNode, body: Block): FunctionExpression;
    function createArrowFunction(modifiers: Modifier[], typeParameters: TypeParameterDeclaration[], parameters: ParameterDeclaration[], type: TypeNode, equalsGreaterThanToken: EqualsGreaterThanToken, body: ConciseBody, location?: TextRange, flags?: NodeFlags): ArrowFunction;
    function updateArrowFunction(node: ArrowFunction, modifiers: Modifier[], typeParameters: TypeParameterDeclaration[], parameters: ParameterDeclaration[], type: TypeNode, body: ConciseBody): ArrowFunction;
    function createDelete(expression: Expression, location?: TextRange): DeleteExpression;
    function updateDelete(node: DeleteExpression, expression: Expression): Expression;
    function createTypeOf(expression: Expression, location?: TextRange): TypeOfExpression;
    function updateTypeOf(node: TypeOfExpression, expression: Expression): Expression;
    function createVoid(expression: Expression, location?: TextRange): VoidExpression;
    function updateVoid(node: VoidExpression, expression: Expression): VoidExpression;
    function createAwait(expression: Expression, location?: TextRange): AwaitExpression;
    function updateAwait(node: AwaitExpression, expression: Expression): AwaitExpression;
    function createPrefix(operator: PrefixUnaryOperator, operand: Expression, location?: TextRange): PrefixUnaryExpression;
    function updatePrefix(node: PrefixUnaryExpression, operand: Expression): PrefixUnaryExpression;
    function createPostfix(operand: Expression, operator: PostfixUnaryOperator, location?: TextRange): PostfixUnaryExpression;
    function updatePostfix(node: PostfixUnaryExpression, operand: Expression): PostfixUnaryExpression;
    function createBinary(left: Expression, operator: BinaryOperator | BinaryOperatorToken, right: Expression, location?: TextRange): BinaryExpression;
    function updateBinary(node: BinaryExpression, left: Expression, right: Expression): BinaryExpression;
    function createConditional(condition: Expression, whenTrue: Expression, whenFalse: Expression, location?: TextRange): ConditionalExpression;
    function createConditional(condition: Expression, questionToken: QuestionToken, whenTrue: Expression, colonToken: ColonToken, whenFalse: Expression, location?: TextRange): ConditionalExpression;
    function updateConditional(node: ConditionalExpression, condition: Expression, whenTrue: Expression, whenFalse: Expression): ConditionalExpression;
    function createTemplateExpression(head: TemplateHead, templateSpans: TemplateSpan[], location?: TextRange): TemplateExpression;
    function updateTemplateExpression(node: TemplateExpression, head: TemplateHead, templateSpans: TemplateSpan[]): TemplateExpression;
    function createYield(asteriskToken: AsteriskToken, expression: Expression, location?: TextRange): YieldExpression;
    function updateYield(node: YieldExpression, expression: Expression): YieldExpression;
    function createSpread(expression: Expression, location?: TextRange): SpreadElement;
    function updateSpread(node: SpreadElement, expression: Expression): SpreadElement;
    function createClassExpression(modifiers: Modifier[], name: Identifier, typeParameters: TypeParameterDeclaration[], heritageClauses: HeritageClause[], members: ClassElement[], location?: TextRange): ClassExpression;
    function updateClassExpression(node: ClassExpression, modifiers: Modifier[], name: Identifier, typeParameters: TypeParameterDeclaration[], heritageClauses: HeritageClause[], members: ClassElement[]): ClassExpression;
    function createOmittedExpression(location?: TextRange): OmittedExpression;
    function createExpressionWithTypeArguments(typeArguments: TypeNode[], expression: Expression, location?: TextRange): ExpressionWithTypeArguments;
    function updateExpressionWithTypeArguments(node: ExpressionWithTypeArguments, typeArguments: TypeNode[], expression: Expression): ExpressionWithTypeArguments;
    function createTemplateSpan(expression: Expression, literal: TemplateMiddle | TemplateTail, location?: TextRange): TemplateSpan;
    function updateTemplateSpan(node: TemplateSpan, expression: Expression, literal: TemplateMiddle | TemplateTail): TemplateSpan;
    function createBlock(statements: Statement[], location?: TextRange, multiLine?: boolean, flags?: NodeFlags): Block;
    function updateBlock(node: Block, statements: Statement[]): Block;
    function createVariableStatement(modifiers: Modifier[], declarationList: VariableDeclarationList | VariableDeclaration[], location?: TextRange, flags?: NodeFlags): VariableStatement;
    function updateVariableStatement(node: VariableStatement, modifiers: Modifier[], declarationList: VariableDeclarationList): VariableStatement;
    function createVariableDeclarationList(declarations: VariableDeclaration[], location?: TextRange, flags?: NodeFlags): VariableDeclarationList;
    function updateVariableDeclarationList(node: VariableDeclarationList, declarations: VariableDeclaration[]): VariableDeclarationList;
    function createVariableDeclaration(name: string | BindingPattern | Identifier, type?: TypeNode, initializer?: Expression, location?: TextRange, flags?: NodeFlags): VariableDeclaration;
    function updateVariableDeclaration(node: VariableDeclaration, name: BindingName, type: TypeNode, initializer: Expression): VariableDeclaration;
    function createEmptyStatement(location: TextRange): EmptyStatement;
    function createStatement(expression: Expression, location?: TextRange, flags?: NodeFlags): ExpressionStatement;
    function updateStatement(node: ExpressionStatement, expression: Expression): ExpressionStatement;
    function createIf(expression: Expression, thenStatement: Statement, elseStatement?: Statement, location?: TextRange): IfStatement;
    function updateIf(node: IfStatement, expression: Expression, thenStatement: Statement, elseStatement: Statement): IfStatement;
    function createDo(statement: Statement, expression: Expression, location?: TextRange): DoStatement;
    function updateDo(node: DoStatement, statement: Statement, expression: Expression): DoStatement;
    function createWhile(expression: Expression, statement: Statement, location?: TextRange): WhileStatement;
    function updateWhile(node: WhileStatement, expression: Expression, statement: Statement): WhileStatement;
    function createFor(initializer: ForInitializer, condition: Expression, incrementor: Expression, statement: Statement, location?: TextRange): ForStatement;
    function updateFor(node: ForStatement, initializer: ForInitializer, condition: Expression, incrementor: Expression, statement: Statement): ForStatement;
    function createForIn(initializer: ForInitializer, expression: Expression, statement: Statement, location?: TextRange): ForInStatement;
    function updateForIn(node: ForInStatement, initializer: ForInitializer, expression: Expression, statement: Statement): ForInStatement;
    function createForOf(initializer: ForInitializer, expression: Expression, statement: Statement, location?: TextRange): ForOfStatement;
    function updateForOf(node: ForOfStatement, initializer: ForInitializer, expression: Expression, statement: Statement): ForOfStatement;
    function createContinue(label?: Identifier, location?: TextRange): ContinueStatement;
    function updateContinue(node: ContinueStatement, label: Identifier): ContinueStatement;
    function createBreak(label?: Identifier, location?: TextRange): BreakStatement;
    function updateBreak(node: BreakStatement, label: Identifier): BreakStatement;
    function createReturn(expression?: Expression, location?: TextRange): ReturnStatement;
    function updateReturn(node: ReturnStatement, expression: Expression): ReturnStatement;
    function createWith(expression: Expression, statement: Statement, location?: TextRange): WithStatement;
    function updateWith(node: WithStatement, expression: Expression, statement: Statement): WithStatement;
    function createSwitch(expression: Expression, caseBlock: CaseBlock, location?: TextRange): SwitchStatement;
    function updateSwitch(node: SwitchStatement, expression: Expression, caseBlock: CaseBlock): SwitchStatement;
    function createLabel(label: string | Identifier, statement: Statement, location?: TextRange): LabeledStatement;
    function updateLabel(node: LabeledStatement, label: Identifier, statement: Statement): LabeledStatement;
    function createThrow(expression: Expression, location?: TextRange): ThrowStatement;
    function updateThrow(node: ThrowStatement, expression: Expression): ThrowStatement;
    function createTry(tryBlock: Block, catchClause: CatchClause, finallyBlock: Block, location?: TextRange): TryStatement;
    function updateTry(node: TryStatement, tryBlock: Block, catchClause: CatchClause, finallyBlock: Block): TryStatement;
    function createCaseBlock(clauses: CaseOrDefaultClause[], location?: TextRange): CaseBlock;
    function updateCaseBlock(node: CaseBlock, clauses: CaseOrDefaultClause[]): CaseBlock;
    function createFunctionDeclaration(decorators: Decorator[], modifiers: Modifier[], asteriskToken: AsteriskToken, name: string | Identifier, typeParameters: TypeParameterDeclaration[], parameters: ParameterDeclaration[], type: TypeNode, body: Block, location?: TextRange, flags?: NodeFlags): FunctionDeclaration;
    function updateFunctionDeclaration(node: FunctionDeclaration, decorators: Decorator[], modifiers: Modifier[], name: Identifier, typeParameters: TypeParameterDeclaration[], parameters: ParameterDeclaration[], type: TypeNode, body: Block): FunctionDeclaration;
    function createClassDeclaration(decorators: Decorator[], modifiers: Modifier[], name: Identifier, typeParameters: TypeParameterDeclaration[], heritageClauses: HeritageClause[], members: ClassElement[], location?: TextRange): ClassDeclaration;
    function updateClassDeclaration(node: ClassDeclaration, decorators: Decorator[], modifiers: Modifier[], name: Identifier, typeParameters: TypeParameterDeclaration[], heritageClauses: HeritageClause[], members: ClassElement[]): ClassDeclaration;
    function createImportDeclaration(decorators: Decorator[], modifiers: Modifier[], importClause: ImportClause, moduleSpecifier?: Expression, location?: TextRange): ImportDeclaration;
    function updateImportDeclaration(node: ImportDeclaration, decorators: Decorator[], modifiers: Modifier[], importClause: ImportClause, moduleSpecifier: Expression): ImportDeclaration;
    function createImportClause(name: Identifier, namedBindings: NamedImportBindings, location?: TextRange): ImportClause;
    function updateImportClause(node: ImportClause, name: Identifier, namedBindings: NamedImportBindings): ImportClause;
    function createNamespaceImport(name: Identifier, location?: TextRange): NamespaceImport;
    function updateNamespaceImport(node: NamespaceImport, name: Identifier): NamespaceImport;
    function createNamedImports(elements: ImportSpecifier[], location?: TextRange): NamedImports;
    function updateNamedImports(node: NamedImports, elements: ImportSpecifier[]): NamedImports;
    function createImportSpecifier(propertyName: Identifier, name: Identifier, location?: TextRange): ImportSpecifier;
    function updateImportSpecifier(node: ImportSpecifier, propertyName: Identifier, name: Identifier): ImportSpecifier;
    function createExportAssignment(decorators: Decorator[], modifiers: Modifier[], isExportEquals: boolean, expression: Expression, location?: TextRange): ExportAssignment;
    function updateExportAssignment(node: ExportAssignment, decorators: Decorator[], modifiers: Modifier[], expression: Expression): ExportAssignment;
    function createExportDeclaration(decorators: Decorator[], modifiers: Modifier[], exportClause: NamedExports, moduleSpecifier?: Expression, location?: TextRange): ExportDeclaration;
    function updateExportDeclaration(node: ExportDeclaration, decorators: Decorator[], modifiers: Modifier[], exportClause: NamedExports, moduleSpecifier: Expression): ExportDeclaration;
    function createNamedExports(elements: ExportSpecifier[], location?: TextRange): NamedExports;
    function updateNamedExports(node: NamedExports, elements: ExportSpecifier[]): NamedExports;
    function createExportSpecifier(name: string | Identifier, propertyName?: string | Identifier, location?: TextRange): ExportSpecifier;
    function updateExportSpecifier(node: ExportSpecifier, name: Identifier, propertyName: Identifier): ExportSpecifier;
    function createJsxElement(openingElement: JsxOpeningElement, children: JsxChild[], closingElement: JsxClosingElement, location?: TextRange): JsxElement;
    function updateJsxElement(node: JsxElement, openingElement: JsxOpeningElement, children: JsxChild[], closingElement: JsxClosingElement): JsxElement;
    function createJsxSelfClosingElement(tagName: JsxTagNameExpression, attributes: JsxAttributeLike[], location?: TextRange): JsxSelfClosingElement;
    function updateJsxSelfClosingElement(node: JsxSelfClosingElement, tagName: JsxTagNameExpression, attributes: JsxAttributeLike[]): JsxSelfClosingElement;
    function createJsxOpeningElement(tagName: JsxTagNameExpression, attributes: JsxAttributeLike[], location?: TextRange): JsxOpeningElement;
    function updateJsxOpeningElement(node: JsxOpeningElement, tagName: JsxTagNameExpression, attributes: JsxAttributeLike[]): JsxOpeningElement;
    function createJsxClosingElement(tagName: JsxTagNameExpression, location?: TextRange): JsxClosingElement;
    function updateJsxClosingElement(node: JsxClosingElement, tagName: JsxTagNameExpression): JsxClosingElement;
    function createJsxAttribute(name: Identifier, initializer: StringLiteral | JsxExpression, location?: TextRange): JsxAttribute;
    function updateJsxAttribute(node: JsxAttribute, name: Identifier, initializer: StringLiteral | JsxExpression): JsxAttribute;
    function createJsxSpreadAttribute(expression: Expression, location?: TextRange): JsxSpreadAttribute;
    function updateJsxSpreadAttribute(node: JsxSpreadAttribute, expression: Expression): JsxSpreadAttribute;
    function createJsxExpression(expression: Expression, location?: TextRange): JsxExpression;
    function updateJsxExpression(node: JsxExpression, expression: Expression): JsxExpression;
    function createHeritageClause(token: SyntaxKind, types: ExpressionWithTypeArguments[], location?: TextRange): HeritageClause;
    function updateHeritageClause(node: HeritageClause, types: ExpressionWithTypeArguments[]): HeritageClause;
    function createCaseClause(expression: Expression, statements: Statement[], location?: TextRange): CaseClause;
    function updateCaseClause(node: CaseClause, expression: Expression, statements: Statement[]): CaseClause;
    function createDefaultClause(statements: Statement[], location?: TextRange): DefaultClause;
    function updateDefaultClause(node: DefaultClause, statements: Statement[]): DefaultClause;
    function createCatchClause(variableDeclaration: string | VariableDeclaration, block: Block, location?: TextRange): CatchClause;
    function updateCatchClause(node: CatchClause, variableDeclaration: VariableDeclaration, block: Block): CatchClause;
    function createPropertyAssignment(name: string | PropertyName, initializer: Expression, location?: TextRange): PropertyAssignment;
    function updatePropertyAssignment(node: PropertyAssignment, name: PropertyName, initializer: Expression): PropertyAssignment;
    function createShorthandPropertyAssignment(name: string | Identifier, objectAssignmentInitializer: Expression, location?: TextRange): ShorthandPropertyAssignment;
    function createSpreadAssignment(expression: Expression, location?: TextRange): SpreadAssignment;
    function updateShorthandPropertyAssignment(node: ShorthandPropertyAssignment, name: Identifier, objectAssignmentInitializer: Expression): ShorthandPropertyAssignment;
    function updateSpreadAssignment(node: SpreadAssignment, expression: Expression): SpreadAssignment;
    function updateSourceFileNode(node: SourceFile, statements: Statement[]): SourceFile;
    /**
     * Creates a synthetic statement to act as a placeholder for a not-emitted statement in
     * order to preserve comments.
     *
     * @param original The original statement.
     */
    function createNotEmittedStatement(original: Node): NotEmittedStatement;
    /**
     * Creates a synthetic element to act as a placeholder for the end of an emitted declaration in
     * order to properly emit exports.
     */
    function createEndOfDeclarationMarker(original: Node): EndOfDeclarationMarker;
    /**
     * Creates a synthetic element to act as a placeholder for the beginning of a merged declaration in
     * order to properly emit exports.
     */
    function createMergeDeclarationMarker(original: Node): MergeDeclarationMarker;
    /**
     * Creates a synthetic expression to act as a placeholder for a not-emitted expression in
     * order to preserve comments or sourcemap positions.
     *
     * @param expression The inner expression to emit.
     * @param original The original outer expression.
     * @param location The location for the expression. Defaults to the positions from "original" if provided.
     */
    function createPartiallyEmittedExpression(expression: Expression, original?: Node, location?: TextRange): PartiallyEmittedExpression;
    function updatePartiallyEmittedExpression(node: PartiallyEmittedExpression, expression: Expression): PartiallyEmittedExpression;
    /**
     * Creates a node that emits a string of raw text in an expression position. Raw text is never
     * transformed, should be ES3 compliant, and should have the same precedence as
     * PrimaryExpression.
     *
     * @param text The raw text of the node.
     */
    function createRawExpression(text: string): RawExpression;
    function createComma(left: Expression, right: Expression): Expression;
    function createLessThan(left: Expression, right: Expression, location?: TextRange): Expression;
    function createAssignment(left: ObjectLiteralExpression | ArrayLiteralExpression, right: Expression, location?: TextRange): DestructuringAssignment;
    function createAssignment(left: Expression, right: Expression, location?: TextRange): BinaryExpression;
    function createStrictEquality(left: Expression, right: Expression): BinaryExpression;
    function createStrictInequality(left: Expression, right: Expression): BinaryExpression;
    function createAdd(left: Expression, right: Expression): BinaryExpression;
    function createSubtract(left: Expression, right: Expression): BinaryExpression;
    function createPostfixIncrement(operand: Expression, location?: TextRange): PostfixUnaryExpression;
    function createLogicalAnd(left: Expression, right: Expression): BinaryExpression;
    function createLogicalOr(left: Expression, right: Expression): BinaryExpression;
    function createLogicalNot(operand: Expression): PrefixUnaryExpression;
    function createVoidZero(): VoidExpression;
    type TypeOfTag = "undefined" | "number" | "boolean" | "string" | "symbol" | "object" | "function";
    function createTypeCheck(value: Expression, tag: TypeOfTag): BinaryExpression;
    function createMemberAccessForPropertyName(target: Expression, memberName: PropertyName, location?: TextRange): MemberExpression;
    function createFunctionCall(func: Expression, thisArg: Expression, argumentsList: Expression[], location?: TextRange): CallExpression;
    function createFunctionApply(func: Expression, thisArg: Expression, argumentsExpression: Expression, location?: TextRange): CallExpression;
    function createArraySlice(array: Expression, start?: number | Expression): CallExpression;
    function createArrayConcat(array: Expression, values: Expression[]): CallExpression;
    function createMathPow(left: Expression, right: Expression, location?: TextRange): CallExpression;
    function createExpressionForJsxElement(jsxFactoryEntity: EntityName, reactNamespace: string, tagName: Expression, props: Expression, children: Expression[], parentElement: JsxOpeningLikeElement, location: TextRange): LeftHandSideExpression;
    function createExportDefault(expression: Expression): ExportAssignment;
    function createExternalModuleExport(exportName: Identifier): ExportDeclaration;
    function createLetStatement(name: Identifier, initializer: Expression, location?: TextRange): VariableStatement;
    function createLetDeclarationList(declarations: VariableDeclaration[], location?: TextRange): VariableDeclarationList;
    function createConstDeclarationList(declarations: VariableDeclaration[], location?: TextRange): VariableDeclarationList;
    function getHelperName(name: string): Identifier;
    interface CallBinding {
        target: LeftHandSideExpression;
        thisArg: Expression;
    }
    function createCallBinding(expression: Expression, recordTempVariable: (temp: Identifier) => void, languageVersion?: ScriptTarget, cacheIdentifiers?: boolean): CallBinding;
    function inlineExpressions(expressions: Expression[]): Expression;
    function createExpressionFromEntityName(node: EntityName | Expression): Expression;
    function createExpressionForPropertyName(memberName: PropertyName): Expression;
    function createExpressionForObjectLiteralElementLike(node: ObjectLiteralExpression, property: ObjectLiteralElementLike, receiver: Expression): Expression;
    /**
     * Gets the local name of a declaration. This is primarily used for declarations that can be
     * referred to by name in the declaration's immediate scope (classes, enums, namespaces). A
     * local name will *never* be prefixed with an module or namespace export modifier like
     * "exports." when emitted as an expression.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getLocalName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets whether an identifier should only be referred to by its local name.
     */
    function isLocalName(node: Identifier): boolean;
    /**
     * Gets the export name of a declaration. This is primarily used for declarations that can be
     * referred to by name in the declaration's immediate scope (classes, enums, namespaces). An
     * export name will *always* be prefixed with an module or namespace export modifier like
     * `"exports."` when emitted as an expression if the name points to an exported symbol.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getExportName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets whether an identifier should only be referred to by its export representation if the
     * name points to an exported symbol.
     */
    function isExportName(node: Identifier): boolean;
    /**
     * Gets the name of a declaration for use in declarations.
     *
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getDeclarationName(node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier;
    /**
     * Gets the exported name of a declaration for use in expressions.
     *
     * An exported name will *always* be prefixed with an module or namespace export modifier like
     * "exports." if the name points to an exported symbol.
     *
     * @param ns The namespace identifier.
     * @param node The declaration.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getExternalModuleOrNamespaceExportName(ns: Identifier | undefined, node: Declaration, allowComments?: boolean, allowSourceMaps?: boolean): Identifier | PropertyAccessExpression;
    /**
     * Gets a namespace-qualified name for use in expressions.
     *
     * @param ns The namespace identifier.
     * @param name The name.
     * @param allowComments A value indicating whether comments may be emitted for the name.
     * @param allowSourceMaps A value indicating whether source maps may be emitted for the name.
     */
    function getNamespaceMemberName(ns: Identifier, name: Identifier, allowComments?: boolean, allowSourceMaps?: boolean): PropertyAccessExpression;
    function convertToFunctionBody(node: ConciseBody, multiLine?: boolean): Block;
    /**
     * Add any necessary prologue-directives into target statement-array.
     * The function needs to be called during each transformation step.
     * This function needs to be called whenever we transform the statement
     * list of a source file, namespace, or function-like body.
     *
     * @param target: result statements array
     * @param source: origin statements array
     * @param ensureUseStrict: boolean determining whether the function need to add prologue-directives
     * @param visitor: Optional callback used to visit any custom prologue directives.
     */
    function addPrologueDirectives(target: Statement[], source: Statement[], ensureUseStrict?: boolean, visitor?: (node: Node) => VisitResult<Node>): number;
    function startsWithUseStrict(statements: Statement[]): boolean;
    /**
     * Ensures "use strict" directive is added
     *
     * @param statements An array of statements
     */
    function ensureUseStrict(statements: NodeArray<Statement>): NodeArray<Statement>;
    /**
     * Wraps the operand to a BinaryExpression in parentheses if they are needed to preserve the intended
     * order of operations.
     *
     * @param binaryOperator The operator for the BinaryExpression.
     * @param operand The operand for the BinaryExpression.
     * @param isLeftSideOfBinary A value indicating whether the operand is the left side of the
     *                           BinaryExpression.
     */
    function parenthesizeBinaryOperand(binaryOperator: SyntaxKind, operand: Expression, isLeftSideOfBinary: boolean, leftOperand?: Expression): Expression;
    function parenthesizeForConditionalHead(condition: Expression): Expression;
    /**
     * Wraps an expression in parentheses if it is needed in order to use the expression
     * as the expression of a NewExpression node.
     *
     * @param expression The Expression node.
     */
    function parenthesizeForNew(expression: Expression): LeftHandSideExpression;
    /**
     * Wraps an expression in parentheses if it is needed in order to use the expression for
     * property or element access.
     *
     * @param expr The expression node.
     */
    function parenthesizeForAccess(expression: Expression): LeftHandSideExpression;
    function parenthesizePostfixOperand(operand: Expression): LeftHandSideExpression;
    function parenthesizePrefixOperand(operand: Expression): UnaryExpression;
    function parenthesizeExpressionForList(expression: Expression): Expression;
    function parenthesizeExpressionForExpressionStatement(expression: Expression): Expression;
    function parenthesizeConciseBody(body: ConciseBody): ConciseBody;
    enum OuterExpressionKinds {
        Parentheses = 1,
        Assertions = 2,
        PartiallyEmittedExpressions = 4,
        All = 7,
    }
    function skipOuterExpressions(node: Expression, kinds?: OuterExpressionKinds): Expression;
    function skipOuterExpressions(node: Node, kinds?: OuterExpressionKinds): Node;
    function skipParentheses(node: Expression): Expression;
    function skipParentheses(node: Node): Node;
    function skipAssertions(node: Expression): Expression;
    function skipAssertions(node: Node): Node;
    function skipPartiallyEmittedExpressions(node: Expression): Expression;
    function skipPartiallyEmittedExpressions(node: Node): Node;
    function startOnNewLine<T extends Node>(node: T): T;
    function setOriginalNode<T extends Node>(node: T, original: Node): T;
    /**
     * Clears any EmitNode entries from parse-tree nodes.
     * @param sourceFile A source file.
     */
    function disposeEmitNodes(sourceFile: SourceFile): void;
    /**
     * Associates a node with the current transformation, initializing
     * various transient transformation properties.
     *
     * @param node The node.
     */
    function getOrCreateEmitNode(node: Node): EmitNode;
    /**
     * Gets flags that control emit behavior of a node.
     *
     * @param node The node.
     */
    function getEmitFlags(node: Node): EmitFlags;
    /**
     * Sets flags that control emit behavior of a node.
     *
     * @param node The node.
     * @param emitFlags The NodeEmitFlags for the node.
     */
    function setEmitFlags<T extends Node>(node: T, emitFlags: EmitFlags): T;
    /**
     * Gets a custom text range to use when emitting source maps.
     *
     * @param node The node.
     */
    function getSourceMapRange(node: Node): TextRange;
    /**
     * Sets a custom text range to use when emitting source maps.
     *
     * @param node The node.
     * @param range The text range.
     */
    function setSourceMapRange<T extends Node>(node: T, range: TextRange): T;
    /**
     * Gets the TextRange to use for source maps for a token of a node.
     *
     * @param node The node.
     * @param token The token.
     */
    function getTokenSourceMapRange(node: Node, token: SyntaxKind): TextRange;
    /**
     * Sets the TextRange to use for source maps for a token of a node.
     *
     * @param node The node.
     * @param token The token.
     * @param range The text range.
     */
    function setTokenSourceMapRange<T extends Node>(node: T, token: SyntaxKind, range: TextRange): T;
    /**
     * Gets a custom text range to use when emitting comments.
     *
     * @param node The node.
     */
    function getCommentRange(node: Node): TextRange;
    /**
     * Sets a custom text range to use when emitting comments.
     */
    function setCommentRange<T extends Node>(node: T, range: TextRange): T;
    /**
     * Gets the constant value to emit for an expression.
     */
    function getConstantValue(node: PropertyAccessExpression | ElementAccessExpression): number;
    /**
     * Sets the constant value to emit for an expression.
     */
    function setConstantValue(node: PropertyAccessExpression | ElementAccessExpression, value: number): PropertyAccessExpression | ElementAccessExpression;
    function getExternalHelpersModuleName(node: SourceFile): Identifier;
    function getOrCreateExternalHelpersModuleNameIfNeeded(node: SourceFile, compilerOptions: CompilerOptions): Identifier;
    /**
     * Adds an EmitHelper to a node.
     */
    function addEmitHelper<T extends Node>(node: T, helper: EmitHelper): T;
    /**
     * Adds an EmitHelper to a node.
     */
    function addEmitHelpers<T extends Node>(node: T, helpers: EmitHelper[] | undefined): T;
    /**
     * Removes an EmitHelper from a node.
     */
    function removeEmitHelper(node: Node, helper: EmitHelper): boolean;
    /**
     * Gets the EmitHelpers of a node.
     */
    function getEmitHelpers(node: Node): EmitHelper[] | undefined;
    /**
     * Moves matching emit helpers from a source node to a target node.
     */
    function moveEmitHelpers(source: Node, target: Node, predicate: (helper: EmitHelper) => boolean): void;
    function compareEmitHelpers(x: EmitHelper, y: EmitHelper): Comparison;
    function setTextRange<T extends TextRange>(node: T, location: TextRange): T;
    function setNodeFlags<T extends Node>(node: T, flags: NodeFlags): T;
    function setMultiLine<T extends ObjectLiteralExpression | ArrayLiteralExpression | Block>(node: T, multiLine: boolean): T;
    function setHasTrailingComma<T extends Node>(nodes: NodeArray<T>, hasTrailingComma: boolean): NodeArray<T>;
    /**
     * Get the name of that target module from an import or export declaration
     */
    function getLocalNameForExternalImport(node: ImportDeclaration | ExportDeclaration | ImportEqualsDeclaration, sourceFile: SourceFile): Identifier;
    /**
     * Get the name of a target module from an import/export declaration as should be written in the emitted output.
     * The emitted output name can be different from the input if:
     *  1. The module has a /// <amd-module name="<new name>" />
     *  2. --out or --outFile is used, making the name relative to the rootDir
     *  3- The containing SourceFile has an entry in renamedDependencies for the import as requested by some module loaders (e.g. System).
     * Otherwise, a new StringLiteral node representing the module name will be returned.
     */
    function getExternalModuleNameLiteral(importNode: ImportDeclaration | ExportDeclaration | ImportEqualsDeclaration, sourceFile: SourceFile, host: EmitHost, resolver: EmitResolver, compilerOptions: CompilerOptions): StringLiteral;
    /**
     * Get the name of a module as should be written in the emitted output.
     * The emitted output name can be different from the input if:
     *  1. The module has a /// <amd-module name="<new name>" />
     *  2. --out or --outFile is used, making the name relative to the rootDir
     * Otherwise, a new StringLiteral node representing the module name will be returned.
     */
    function tryGetModuleNameFromFile(file: SourceFile, host: EmitHost, options: CompilerOptions): StringLiteral;
    /**
     * Gets the initializer of an BindingOrAssignmentElement.
     */
    function getInitializerOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): Expression | undefined;
    /**
     * Gets the name of an BindingOrAssignmentElement.
     */
    function getTargetOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): BindingOrAssignmentElementTarget;
    /**
     * Determines whether an BindingOrAssignmentElement is a rest element.
     */
    function getRestIndicatorOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): BindingOrAssignmentElementRestIndicator;
    /**
     * Gets the property name of a BindingOrAssignmentElement
     */
    function getPropertyNameOfBindingOrAssignmentElement(bindingElement: BindingOrAssignmentElement): PropertyName;
    /**
     * Gets the elements of a BindingOrAssignmentPattern
     */
    function getElementsOfBindingOrAssignmentPattern(name: BindingOrAssignmentPattern): BindingOrAssignmentElement[];
    function convertToArrayAssignmentElement(element: BindingOrAssignmentElement): Expression;
    function convertToObjectAssignmentElement(element: BindingOrAssignmentElement): ObjectLiteralElementLike;
    function convertToAssignmentPattern(node: BindingOrAssignmentPattern): AssignmentPattern;
    function convertToObjectAssignmentPattern(node: ObjectBindingOrAssignmentPattern): ObjectLiteralExpression;
    function convertToArrayAssignmentPattern(node: ArrayBindingOrAssignmentPattern): ArrayLiteralExpression;
    function convertToAssignmentElementTarget(node: BindingOrAssignmentElementTarget): Expression;
    interface ExternalModuleInfo {
        externalImports: (ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration)[];
        externalHelpersImportDeclaration: ImportDeclaration | undefined;
        exportSpecifiers: Map<ExportSpecifier[]>;
        exportedBindings: Map<Identifier[]>;
        exportedNames: Identifier[];
        exportEquals: ExportAssignment | undefined;
        hasExportStarsToExportValues: boolean;
    }
    function collectExternalModuleInfo(sourceFile: SourceFile, resolver: EmitResolver, compilerOptions: CompilerOptions): ExternalModuleInfo;
}
declare namespace ts {
    function createNode(kind: SyntaxKind, pos?: number, end?: number): Node;
    function forEachChild<T>(node: Node, cbNode: (node: Node) => T, cbNodeArray?: (nodes: Node[]) => T): T;
    function createSourceFile(fileName: string, sourceText: string, languageVersion: ScriptTarget, setParentNodes?: boolean, scriptKind?: ScriptKind): SourceFile;
    function parseIsolatedEntityName(text: string, languageVersion: ScriptTarget): EntityName;
    function isExternalModule(file: SourceFile): boolean;
    function updateSourceFile(sourceFile: SourceFile, newText: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    function parseIsolatedJSDocComment(content: string, start?: number, length?: number): {
        jsDoc: JSDoc;
        diagnostics: Diagnostic[];
    };
    function parseJSDocTypeExpressionForTests(content: string, start?: number, length?: number): {
        jsDocTypeExpression: JSDocTypeExpression;
        diagnostics: Diagnostic[];
    };
}
declare namespace ts {
    enum ModuleInstanceState {
        NonInstantiated = 0,
        Instantiated = 1,
        ConstEnumOnly = 2,
    }
    function getModuleInstanceState(node: Node): ModuleInstanceState;
    function bindSourceFile(file: SourceFile, options: CompilerOptions): void;
    /**
     * Computes the transform flags for a node, given the transform flags of its subtree
     *
     * @param node The node to analyze
     * @param subtreeFlags Transform flags computed for this node's subtree
     */
    function computeTransformFlagsForNode(node: Node, subtreeFlags: TransformFlags): TransformFlags;
    /**
     * Gets the transform flags to exclude when unioning the transform flags of a subtree.
     *
     * NOTE: This needs to be kept up-to-date with the exclusions used in `computeTransformFlagsForNode`.
     *       For performance reasons, `computeTransformFlagsForNode` uses local constant values rather
     *       than calling this function.
     */
    function getTransformFlagsSubtreeExclusions(kind: SyntaxKind): TransformFlags;
}
declare namespace ts {
    function trace(host: ModuleResolutionHost, message: DiagnosticMessage, ...args: any[]): void;
    function isTraceEnabled(compilerOptions: CompilerOptions, host: ModuleResolutionHost): boolean;
    function getEffectiveTypeRoots(options: CompilerOptions, host: {
        directoryExists?: (directoryName: string) => boolean;
        getCurrentDirectory?: () => string;
    }): string[] | undefined;
    /**
     * @param {string | undefined} containingFile - file that contains type reference directive, can be undefined if containing file is unknown.
     * This is possible in case if resolution is performed for directives specified via 'types' parameter. In this case initial path for secondary lookups
     * is assumed to be the same as root directory of the project.
     */
    function resolveTypeReferenceDirective(typeReferenceDirectiveName: string, containingFile: string | undefined, options: CompilerOptions, host: ModuleResolutionHost): ResolvedTypeReferenceDirectiveWithFailedLookupLocations;
    /**
      * Given a set of options, returns the set of type directive names
      *   that should be included for this program automatically.
      * This list could either come from the config file,
      *   or from enumerating the types root + initial secondary types lookup location.
      * More type directives might appear in the program later as a result of loading actual source files;
      *   this list is only the set of defaults that are implicitly included.
      */
    function getAutomaticTypeDirectiveNames(options: CompilerOptions, host: ModuleResolutionHost): string[];
    function resolveModuleName(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost): ResolvedModuleWithFailedLookupLocations;
    function nodeModuleNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost): ResolvedModuleWithFailedLookupLocations;
    function directoryProbablyExists(directoryName: string, host: {
        directoryExists?: (directoryName: string) => boolean;
    }): boolean;
    function classicNameResolver(moduleName: string, containingFile: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost): ResolvedModuleWithFailedLookupLocations;
    /**
     * LSHost may load a module from a global cache of typings.
     * This is the minumum code needed to expose that functionality; the rest is in LSHost.
     */
    function loadModuleFromGlobalCache(moduleName: string, projectName: string, compilerOptions: CompilerOptions, host: ModuleResolutionHost, globalCache: string): ResolvedModuleWithFailedLookupLocations;
}
declare namespace ts {
    function getNodeId(node: Node): number;
    function getSymbolId(symbol: Symbol): number;
    function createTypeChecker(host: TypeCheckerHost, produceDiagnostics: boolean): TypeChecker;
}
declare namespace ts {
    const compileOnSaveCommandLineOption: CommandLineOption;
    const optionDeclarations: CommandLineOption[];
    let typingOptionDeclarations: CommandLineOption[];
    interface OptionNameMap {
        optionNameMap: Map<CommandLineOption>;
        shortOptionNames: Map<string>;
    }
    const defaultInitCompilerOptions: CompilerOptions;
    function getOptionNameMap(): OptionNameMap;
    function createCompilerDiagnosticForInvalidCustomType(opt: CommandLineOptionOfCustomType): Diagnostic;
    function parseCustomTypeOption(opt: CommandLineOptionOfCustomType, value: string, errors: Diagnostic[]): string | number;
    function parseListTypeOption(opt: CommandLineOptionOfListType, value: string, errors: Diagnostic[]): (string | number)[] | undefined;
    function parseCommandLine(commandLine: string[], readFile?: (path: string) => string): ParsedCommandLine;
    /**
      * Read tsconfig.json file
      * @param fileName The path to the config file
      */
    function readConfigFile(fileName: string, readFile: (path: string) => string): {
        config?: any;
        error?: Diagnostic;
    };
    /**
      * Parse the text of the tsconfig.json file
      * @param fileName The path to the config file
      * @param jsonText The text of the config file
      */
    function parseConfigFileTextToJson(fileName: string, jsonText: string, stripComments?: boolean): {
        config?: any;
        error?: Diagnostic;
    };
    /**
     * Generate tsconfig configuration when running command line "--init"
     * @param options commandlineOptions to be generated into tsconfig.json
     * @param fileNames array of filenames to be generated into tsconfig.json
     */
    function generateTSConfig(options: CompilerOptions, fileNames: string[]): {
        compilerOptions: Map<CompilerOptionsValue>;
    };
    /**
      * Parse the contents of a config file (tsconfig.json).
      * @param json The contents of the config file to parse
      * @param host Instance of ParseConfigHost used to enumerate files in folder.
      * @param basePath A root directory to resolve relative path entries in the config
      *    file to. e.g. outDir
      */
    function parseJsonConfigFileContent(json: any, host: ParseConfigHost, basePath: string, existingOptions?: CompilerOptions, configFileName?: string, resolutionStack?: Path[]): ParsedCommandLine;
    function convertCompileOnSaveOptionFromJson(jsonOption: any, basePath: string, errors: Diagnostic[]): boolean;
    function convertCompilerOptionsFromJson(jsonOptions: any, basePath: string, configFileName?: string): {
        options: CompilerOptions;
        errors: Diagnostic[];
    };
    function convertTypingOptionsFromJson(jsonOptions: any, basePath: string, configFileName?: string): {
        options: TypingOptions;
        errors: Diagnostic[];
    };
}
declare namespace ts {
    interface SourceMapWriter {
        /**
         * Initialize the SourceMapWriter for a new output file.
         *
         * @param filePath The path to the generated output file.
         * @param sourceMapFilePath The path to the output source map file.
         * @param sourceFiles The input source files for the program.
         * @param isBundledEmit A value indicating whether the generated output file is a bundle.
         */
        initialize(filePath: string, sourceMapFilePath: string, sourceFiles: SourceFile[], isBundledEmit: boolean): void;
        /**
         * Reset the SourceMapWriter to an empty state.
         */
        reset(): void;
        /**
         * Set the current source file.
         *
         * @param sourceFile The source file.
         */
        setSourceFile(sourceFile: SourceFile): void;
        /**
         * Emits a mapping.
         *
         * If the position is synthetic (undefined or a negative value), no mapping will be
         * created.
         *
         * @param pos The position.
         */
        emitPos(pos: number): void;
        /**
         * Emits a node with possible leading and trailing source maps.
         *
         * @param emitContext The current emit context
         * @param node The node to emit.
         * @param emitCallback The callback used to emit the node.
         */
        emitNodeWithSourceMap(emitContext: EmitContext, node: Node, emitCallback: (emitContext: EmitContext, node: Node) => void): void;
        /**
         * Emits a token of a node node with possible leading and trailing source maps.
         *
         * @param node The node containing the token.
         * @param token The token to emit.
         * @param tokenStartPos The start pos of the token.
         * @param emitCallback The callback used to emit the token.
         */
        emitTokenWithSourceMap(node: Node, token: SyntaxKind, tokenStartPos: number, emitCallback: (token: SyntaxKind, tokenStartPos: number) => number): number;
        /**
         * Gets the text for the source map.
         */
        getText(): string;
        /**
         * Gets the SourceMappingURL for the source map.
         */
        getSourceMappingURL(): string;
        /**
         * Gets test data for source maps.
         */
        getSourceMapData(): SourceMapData;
    }
    function createSourceMapWriter(host: EmitHost, writer: EmitTextWriter): SourceMapWriter;
}
declare namespace ts {
    interface CommentWriter {
        reset(): void;
        setSourceFile(sourceFile: SourceFile): void;
        emitNodeWithComments(emitContext: EmitContext, node: Node, emitCallback: (emitContext: EmitContext, node: Node) => void): void;
        emitBodyWithDetachedComments(node: Node, detachedRange: TextRange, emitCallback: (node: Node) => void): void;
        emitTrailingCommentsOfPosition(pos: number): void;
    }
    function createCommentWriter(host: EmitHost, writer: EmitTextWriter, sourceMap: SourceMapWriter): CommentWriter;
}
declare namespace ts {
    function getDeclarationDiagnostics(host: EmitHost, resolver: EmitResolver, targetSourceFile: SourceFile): Diagnostic[];
    function writeDeclarationFile(declarationFilePath: string, sourceFiles: SourceFile[], isBundledEmit: boolean, host: EmitHost, resolver: EmitResolver, emitterDiagnostics: DiagnosticCollection, emitOnlyDtsFiles: boolean): boolean;
}
declare namespace ts {
    type VisitResult<T extends Node> = T | T[];
    /**
     * Similar to `reduceLeft`, performs a reduction against each child of a node.
     * NOTE: Unlike `forEachChild`, this does *not* visit every node. Only nodes added to the
     *       `nodeEdgeTraversalMap` above will be visited.
     *
     * @param node The node containing the children to reduce.
     * @param initial The initial value to supply to the reduction.
     * @param f The callback function
     */
    function reduceEachChild<T>(node: Node, initial: T, cbNode: (memo: T, node: Node) => T, cbNodeArray?: (memo: T, nodes: Node[]) => T): T;
    /**
     * Visits a Node using the supplied visitor, possibly returning a new Node in its place.
     *
     * @param node The Node to visit.
     * @param visitor The callback used to visit the Node.
     * @param test A callback to execute to verify the Node is valid.
     * @param optional An optional value indicating whether the Node is itself optional.
     * @param lift An optional callback to execute to lift a NodeArrayNode into a valid Node.
     */
    function visitNode<T extends Node>(node: T, visitor: (node: Node) => VisitResult<Node>, test: (node: Node) => boolean, optional?: boolean, lift?: (node: NodeArray<Node>) => T): T;
    function visitNode<T extends Node>(node: T, visitor: (node: Node) => VisitResult<Node>, test: (node: Node) => boolean, optional: boolean, lift: (node: NodeArray<Node>) => T, parenthesize: (node: Node, parentNode: Node) => Node, parentNode: Node): T;
    /**
     * Visits a NodeArray using the supplied visitor, possibly returning a new NodeArray in its place.
     *
     * @param nodes The NodeArray to visit.
     * @param visitor The callback used to visit a Node.
     * @param test A node test to execute for each node.
     * @param start An optional value indicating the starting offset at which to start visiting.
     * @param count An optional value indicating the maximum number of nodes to visit.
     */
    function visitNodes<T extends Node>(nodes: NodeArray<T>, visitor: (node: Node) => VisitResult<Node>, test: (node: Node) => boolean, start?: number, count?: number): NodeArray<T>;
    function visitNodes<T extends Node>(nodes: NodeArray<T>, visitor: (node: Node) => VisitResult<Node>, test: (node: Node) => boolean, start: number, count: number, parenthesize: (node: Node, parentNode: Node) => Node, parentNode: Node): NodeArray<T>;
    /**
     * Starts a new lexical environment and visits a statement list, ending the lexical environment
     * and merging hoisted declarations upon completion.
     */
    function visitLexicalEnvironment(statements: NodeArray<Statement>, visitor: (node: Node) => VisitResult<Node>, context: TransformationContext, start?: number, ensureUseStrict?: boolean): NodeArray<Statement>;
    /**
     * Starts a new lexical environment and visits a parameter list, suspending the lexical
     * environment upon completion.
     */
    function visitParameterList(nodes: NodeArray<ParameterDeclaration>, visitor: (node: Node) => VisitResult<Node>, context: TransformationContext): NodeArray<ParameterDeclaration>;
    /**
     * Resumes a suspended lexical environment and visits a function body, ending the lexical
     * environment and merging hoisted declarations upon completion.
     */
    function visitFunctionBody(node: FunctionBody, visitor: (node: Node) => VisitResult<Node>, context: TransformationContext): FunctionBody;
    /**
     * Resumes a suspended lexical environment and visits a concise body, ending the lexical
     * environment and merging hoisted declarations upon completion.
     */
    function visitFunctionBody(node: ConciseBody, visitor: (node: Node) => VisitResult<Node>, context: TransformationContext): ConciseBody;
    /**
     * Visits each child of a Node using the supplied visitor, possibly returning a new Node of the same kind in its place.
     *
     * @param node The Node whose children will be visited.
     * @param visitor The callback used to visit each child.
     * @param context A lexical environment context for the visitor.
     */
    function visitEachChild<T extends Node>(node: T, visitor: (node: Node) => VisitResult<Node>, context: TransformationContext): T;
    /**
     * Merges generated lexical declarations into a new statement list.
     */
    function mergeLexicalEnvironment(statements: NodeArray<Statement>, declarations: Statement[]): NodeArray<Statement>;
    /**
     * Appends generated lexical declarations to an array of statements.
     */
    function mergeLexicalEnvironment(statements: Statement[], declarations: Statement[]): Statement[];
    /**
     * Merges generated lexical declarations into the FunctionBody of a non-arrow function-like declaration.
     *
     * @param node The ConciseBody of an arrow function.
     * @param declarations The lexical declarations to merge.
     */
    function mergeFunctionBodyLexicalEnvironment(body: FunctionBody, declarations: Statement[]): FunctionBody;
    /**
     * Merges generated lexical declarations into the ConciseBody of an ArrowFunction.
     *
     * @param node The ConciseBody of an arrow function.
     * @param declarations The lexical declarations to merge.
     */
    function mergeFunctionBodyLexicalEnvironment(body: ConciseBody, declarations: Statement[]): ConciseBody;
    /**
     * Lifts a NodeArray containing only Statement nodes to a block.
     *
     * @param nodes The NodeArray.
     */
    function liftToBlock(nodes: Node[]): Statement;
    /**
     * Aggregates the TransformFlags for a Node and its subtree.
     */
    function aggregateTransformFlags<T extends Node>(node: T): T;
    namespace Debug {
        const failNotOptional: typeof noop;
        const failBadSyntaxKind: (node: Node, message?: string) => void;
        const assertEachNode: (nodes: Node[], test: (node: Node) => boolean, message?: string) => void;
        const assertNode: (node: Node, test: (node: Node) => boolean, message?: string) => void;
        const assertOptionalNode: (node: Node, test: (node: Node) => boolean, message?: string) => void;
        const assertOptionalToken: (node: Node, kind: SyntaxKind, message?: string) => void;
        const assertMissingNode: (node: Node, message?: string) => void;
    }
}
declare namespace ts {
    enum FlattenLevel {
        All = 0,
        ObjectRest = 1,
    }
    /**
     * Flattens a DestructuringAssignment or a VariableDeclaration to an expression.
     *
     * @param node The node to flatten.
     * @param visitor An optional visitor used to visit initializers.
     * @param context The transformation context.
     * @param level Indicates the extent to which flattening should occur.
     * @param needsValue An optional value indicating whether the value from the right-hand-side of
     * the destructuring assignment is needed as part of a larger expression.
     * @param createAssignmentCallback An optional callback used to create the assignment expression.
     */
    function flattenDestructuringAssignment(node: VariableDeclaration | DestructuringAssignment, visitor: ((node: Node) => VisitResult<Node>) | undefined, context: TransformationContext, level: FlattenLevel, needsValue?: boolean, createAssignmentCallback?: (name: Identifier, value: Expression, location?: TextRange) => Expression): Expression;
    /**
     * Flattens a VariableDeclaration or ParameterDeclaration to one or more variable declarations.
     *
     * @param node The node to flatten.
     * @param visitor An optional visitor used to visit initializers.
     * @param context The transformation context.
     * @param boundValue The value bound to the declaration.
     * @param skipInitializer A value indicating whether to ignore the initializer of `node`.
     * @param hoistTempVariables Indicates whether temporary variables should not be recorded in-line.
     * @param level Indicates the extent to which flattening should occur.
     */
    function flattenDestructuringBinding(node: VariableDeclaration | ParameterDeclaration, visitor: (node: Node) => VisitResult<Node>, context: TransformationContext, level: FlattenLevel, rval?: Expression, hoistTempVariables?: boolean, skipInitializer?: boolean): VariableDeclaration[];
}
declare namespace ts {
    function transformTypeScript(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformESNext(context: TransformationContext): (node: SourceFile) => SourceFile;
    function createAssignHelper(context: TransformationContext, attributesSegments: Expression[]): CallExpression;
}
declare namespace ts {
    function transformJsx(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformES2017(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformES2016(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformES2015(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformGenerators(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    /**
     * Transforms ES5 syntax into ES3 syntax.
     *
     * @param context Context and state information for the transformation.
     */
    function transformES5(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformModule(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformSystemModule(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function transformES2015Module(context: TransformationContext): (node: SourceFile) => SourceFile;
}
declare namespace ts {
    function getTransformers(compilerOptions: CompilerOptions): Transformer[];
    /**
     * Transforms an array of SourceFiles by passing them through each transformer.
     *
     * @param resolver The emit resolver provided by the checker.
     * @param host The emit host.
     * @param sourceFiles An array of source files
     * @param transforms An array of Transformers.
     */
    function transformFiles(resolver: EmitResolver, host: EmitHost, sourceFiles: SourceFile[], transformers: Transformer[]): TransformationResult;
}
declare namespace ts {
    function emitFiles(resolver: EmitResolver, host: EmitHost, targetSourceFile: SourceFile, emitOnlyDtsFiles?: boolean): EmitResult;
}
declare namespace ts {
    function findConfigFile(searchPath: string, fileExists: (fileName: string) => boolean, configName?: string): string;
    function resolveTripleslashReference(moduleName: string, containingFile: string): string;
    function computeCommonSourceDirectoryOfFilenames(fileNames: string[], currentDirectory: string, getCanonicalFileName: (fileName: string) => string): string;
    function createCompilerHost(options: CompilerOptions, setParentNodes?: boolean): CompilerHost;
    function getPreEmitDiagnostics(program: Program, sourceFile?: SourceFile, cancellationToken?: CancellationToken): Diagnostic[];
    interface FormatDiagnosticsHost {
        getCurrentDirectory(): string;
        getCanonicalFileName(fileName: string): string;
        getNewLine(): string;
    }
    function formatDiagnostics(diagnostics: Diagnostic[], host: FormatDiagnosticsHost): string;
    function flattenDiagnosticMessageText(messageText: string | DiagnosticMessageChain, newLine: string): string;
    function createProgram(rootNames: string[], options: CompilerOptions, host?: CompilerHost, oldProgram?: Program): Program;
    /**
     * Returns a DiagnosticMessage if we won't include a resolved module due to its extension.
     * The DiagnosticMessage's parameters are the imported module name, and the filename it resolved to.
     * This returns a diagnostic even if the module will be an untyped module.
     */
    function getResolutionDiagnostic(options: CompilerOptions, {extension}: ResolvedModuleFull): DiagnosticMessage | undefined;
}
declare namespace ts {
    interface SourceFile {
        fileWatcher?: FileWatcher;
    }
    function executeCommandLine(args: string[]): void;
}
declare namespace ts {
    interface Node {
        getSourceFile(): SourceFile;
        getChildCount(sourceFile?: SourceFile): number;
        getChildAt(index: number, sourceFile?: SourceFile): Node;
        getChildren(sourceFile?: SourceFile): Node[];
        getStart(sourceFile?: SourceFile, includeJsDocComment?: boolean): number;
        getFullStart(): number;
        getEnd(): number;
        getWidth(sourceFile?: SourceFile): number;
        getFullWidth(): number;
        getLeadingTriviaWidth(sourceFile?: SourceFile): number;
        getFullText(sourceFile?: SourceFile): string;
        getText(sourceFile?: SourceFile): string;
        getFirstToken(sourceFile?: SourceFile): Node;
        getLastToken(sourceFile?: SourceFile): Node;
    }
    interface Symbol {
        getFlags(): SymbolFlags;
        getName(): string;
        getDeclarations(): Declaration[];
        getDocumentationComment(): SymbolDisplayPart[];
    }
    interface Type {
        getFlags(): TypeFlags;
        getSymbol(): Symbol;
        getProperties(): Symbol[];
        getProperty(propertyName: string): Symbol;
        getApparentProperties(): Symbol[];
        getCallSignatures(): Signature[];
        getConstructSignatures(): Signature[];
        getStringIndexType(): Type;
        getNumberIndexType(): Type;
        getBaseTypes(): ObjectType[];
        getNonNullableType(): Type;
    }
    interface Signature {
        getDeclaration(): SignatureDeclaration;
        getTypeParameters(): Type[];
        getParameters(): Symbol[];
        getReturnType(): Type;
        getDocumentationComment(): SymbolDisplayPart[];
    }
    interface SourceFile {
        version: string;
        scriptSnapshot: IScriptSnapshot;
        nameTable: Map<number>;
        getNamedDeclarations(): Map<Declaration[]>;
        getLineAndCharacterOfPosition(pos: number): LineAndCharacter;
        getLineStarts(): number[];
        getPositionOfLineAndCharacter(line: number, character: number): number;
        update(newText: string, textChangeRange: TextChangeRange): SourceFile;
    }
    /**
     * Represents an immutable snapshot of a script at a specified time.Once acquired, the
     * snapshot is observably immutable. i.e. the same calls with the same parameters will return
     * the same values.
     */
    interface IScriptSnapshot {
        /** Gets a portion of the script snapshot specified by [start, end). */
        getText(start: number, end: number): string;
        /** Gets the length of this script snapshot. */
        getLength(): number;
        /**
         * Gets the TextChangeRange that describe how the text changed between this text and
         * an older version.  This information is used by the incremental parser to determine
         * what sections of the script need to be re-parsed.  'undefined' can be returned if the
         * change range cannot be determined.  However, in that case, incremental parsing will
         * not happen and the entire document will be re - parsed.
         */
        getChangeRange(oldSnapshot: IScriptSnapshot): TextChangeRange | undefined;
        /** Releases all resources held by this script snapshot */
        dispose?(): void;
    }
    namespace ScriptSnapshot {
        function fromString(text: string): IScriptSnapshot;
    }
    interface PreProcessedFileInfo {
        referencedFiles: FileReference[];
        typeReferenceDirectives: FileReference[];
        importedFiles: FileReference[];
        ambientExternalModules: string[];
        isLibFile: boolean;
    }
    interface HostCancellationToken {
        isCancellationRequested(): boolean;
    }
    interface LanguageServiceHost {
        getCompilationSettings(): CompilerOptions;
        getNewLine?(): string;
        getProjectVersion?(): string;
        getScriptFileNames(): string[];
        getScriptKind?(fileName: string): ScriptKind;
        getScriptVersion(fileName: string): string;
        getScriptSnapshot(fileName: string): IScriptSnapshot | undefined;
        getLocalizedDiagnosticMessages?(): any;
        getCancellationToken?(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDefaultLibFileName(options: CompilerOptions): string;
        log?(s: string): void;
        trace?(s: string): void;
        error?(s: string): void;
        useCaseSensitiveFileNames?(): boolean;
        readDirectory?(path: string, extensions?: string[], exclude?: string[], include?: string[]): string[];
        readFile?(path: string, encoding?: string): string;
        fileExists?(path: string): boolean;
        getTypeRootsVersion?(): number;
        resolveModuleNames?(moduleNames: string[], containingFile: string): ResolvedModule[];
        resolveTypeReferenceDirectives?(typeDirectiveNames: string[], containingFile: string): ResolvedTypeReferenceDirective[];
        directoryExists?(directoryName: string): boolean;
        getDirectories?(directoryName: string): string[];
    }
    interface LanguageService {
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): Diagnostic[];
        getSemanticDiagnostics(fileName: string): Diagnostic[];
        getCompilerOptionsDiagnostics(): Diagnostic[];
        /**
         * @deprecated Use getEncodedSyntacticClassifications instead.
         */
        getSyntacticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        /**
         * @deprecated Use getEncodedSemanticClassifications instead.
         */
        getSemanticClassifications(fileName: string, span: TextSpan): ClassifiedSpan[];
        getEncodedSyntacticClassifications(fileName: string, span: TextSpan): Classifications;
        getEncodedSemanticClassifications(fileName: string, span: TextSpan): Classifications;
        getCompletionsAtPosition(fileName: string, position: number): CompletionInfo;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string): CompletionEntryDetails;
        getCompletionEntrySymbol(fileName: string, position: number, entryName: string): Symbol;
        getQuickInfoAtPosition(fileName: string, position: number): QuickInfo;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): TextSpan;
        getBreakpointStatementAtPosition(fileName: string, position: number): TextSpan;
        getSignatureHelpItems(fileName: string, position: number): SignatureHelpItems;
        getRenameInfo(fileName: string, position: number): RenameInfo;
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): RenameLocation[];
        getDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getTypeDefinitionAtPosition(fileName: string, position: number): DefinitionInfo[];
        getImplementationAtPosition(fileName: string, position: number): ImplementationLocation[];
        getReferencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        findReferences(fileName: string, position: number): ReferencedSymbol[];
        getDocumentHighlights(fileName: string, position: number, filesToSearch: string[]): DocumentHighlights[];
        /** @deprecated */
        getOccurrencesAtPosition(fileName: string, position: number): ReferenceEntry[];
        getNavigateToItems(searchValue: string, maxResultCount?: number, fileName?: string, excludeDtsFiles?: boolean): NavigateToItem[];
        getNavigationBarItems(fileName: string): NavigationBarItem[];
        getNavigationTree(fileName: string): NavigationTree;
        getOutliningSpans(fileName: string): OutliningSpan[];
        getTodoComments(fileName: string, descriptors: TodoCommentDescriptor[]): TodoComment[];
        getBraceMatchingAtPosition(fileName: string, position: number): TextSpan[];
        getIndentationAtPosition(fileName: string, position: number, options: EditorOptions | EditorSettings): number;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getFormattingEditsForDocument(fileName: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: FormatCodeOptions | FormatCodeSettings): TextChange[];
        getDocCommentTemplateAtPosition(fileName: string, position: number): TextInsertion;
        isValidBraceCompletionAtPosition(fileName: string, position: number, openingBrace: number): boolean;
        getCodeFixesAtPosition(fileName: string, start: number, end: number, errorCodes: number[]): CodeAction[];
        getEmitOutput(fileName: string, emitOnlyDtsFiles?: boolean): EmitOutput;
        getProgram(): Program;
        getNonBoundSourceFile(fileName: string): SourceFile;
        /**
         * @internal
         * @deprecated Use ts.createSourceFile instead.
         */
        getSourceFile(fileName: string): SourceFile;
        dispose(): void;
    }
    interface Classifications {
        spans: number[];
        endOfLineState: EndOfLineState;
    }
    interface ClassifiedSpan {
        textSpan: TextSpan;
        classificationType: string;
    }
    /**
     * Navigation bar interface designed for visual studio's dual-column layout.
     * This does not form a proper tree.
     * The navbar is returned as a list of top-level items, each of which has a list of child items.
     * Child items always have an empty array for their `childItems`.
     */
    interface NavigationBarItem {
        text: string;
        kind: string;
        kindModifiers: string;
        spans: TextSpan[];
        childItems: NavigationBarItem[];
        indent: number;
        bolded: boolean;
        grayed: boolean;
    }
    /**
     * Node in a tree of nested declarations in a file.
     * The top node is always a script or module node.
     */
    interface NavigationTree {
        /** Name of the declaration, or a short description, e.g. "<class>". */
        text: string;
        /** A ScriptElementKind */
        kind: string;
        /** ScriptElementKindModifier separated by commas, e.g. "public,abstract" */
        kindModifiers: string;
        /**
         * Spans of the nodes that generated this declaration.
         * There will be more than one if this is the result of merging.
         */
        spans: TextSpan[];
        /** Present if non-empty */
        childItems?: NavigationTree[];
    }
    interface TodoCommentDescriptor {
        text: string;
        priority: number;
    }
    interface TodoComment {
        descriptor: TodoCommentDescriptor;
        message: string;
        position: number;
    }
    class TextChange {
        span: TextSpan;
        newText: string;
    }
    interface FileTextChanges {
        fileName: string;
        textChanges: TextChange[];
    }
    interface CodeAction {
        /** Description of the code action to display in the UI of the editor */
        description: string;
        /** Text changes to apply to each file as part of the code action */
        changes: FileTextChanges[];
    }
    interface TextInsertion {
        newText: string;
        /** The position in newText the caret should point to after the insertion. */
        caretOffset: number;
    }
    interface RenameLocation {
        textSpan: TextSpan;
        fileName: string;
    }
    interface ReferenceEntry {
        textSpan: TextSpan;
        fileName: string;
        isWriteAccess: boolean;
        isDefinition: boolean;
    }
    interface ImplementationLocation {
        textSpan: TextSpan;
        fileName: string;
    }
    interface DocumentHighlights {
        fileName: string;
        highlightSpans: HighlightSpan[];
    }
    namespace HighlightSpanKind {
        const none = "none";
        const definition = "definition";
        const reference = "reference";
        const writtenReference = "writtenReference";
    }
    interface HighlightSpan {
        fileName?: string;
        textSpan: TextSpan;
        kind: string;
    }
    interface NavigateToItem {
        name: string;
        kind: string;
        kindModifiers: string;
        matchKind: string;
        isCaseSensitive: boolean;
        fileName: string;
        textSpan: TextSpan;
        containerName: string;
        containerKind: string;
    }
    enum IndentStyle {
        None = 0,
        Block = 1,
        Smart = 2,
    }
    interface EditorOptions {
        BaseIndentSize?: number;
        IndentSize: number;
        TabSize: number;
        NewLineCharacter: string;
        ConvertTabsToSpaces: boolean;
        IndentStyle: IndentStyle;
    }
    interface EditorSettings {
        baseIndentSize?: number;
        indentSize?: number;
        tabSize?: number;
        newLineCharacter?: string;
        convertTabsToSpaces?: boolean;
        indentStyle?: IndentStyle;
    }
    interface FormatCodeOptions extends EditorOptions {
        InsertSpaceAfterCommaDelimiter: boolean;
        InsertSpaceAfterSemicolonInForStatements: boolean;
        InsertSpaceBeforeAndAfterBinaryOperators: boolean;
        InsertSpaceAfterKeywordsInControlFlowStatements: boolean;
        InsertSpaceAfterFunctionKeywordForAnonymousFunctions: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: boolean;
        InsertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean;
        InsertSpaceAfterTypeAssertion?: boolean;
        PlaceOpenBraceOnNewLineForFunctions: boolean;
        PlaceOpenBraceOnNewLineForControlBlocks: boolean;
    }
    interface FormatCodeSettings extends EditorSettings {
        insertSpaceAfterCommaDelimiter?: boolean;
        insertSpaceAfterSemicolonInForStatements?: boolean;
        insertSpaceBeforeAndAfterBinaryOperators?: boolean;
        insertSpaceAfterKeywordsInControlFlowStatements?: boolean;
        insertSpaceAfterFunctionKeywordForAnonymousFunctions?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingNonemptyBraces?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces?: boolean;
        insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces?: boolean;
        insertSpaceAfterTypeAssertion?: boolean;
        placeOpenBraceOnNewLineForFunctions?: boolean;
        placeOpenBraceOnNewLineForControlBlocks?: boolean;
    }
    interface DefinitionInfo {
        fileName: string;
        textSpan: TextSpan;
        kind: string;
        name: string;
        containerKind: string;
        containerName: string;
    }
    interface ReferencedSymbolDefinitionInfo extends DefinitionInfo {
        displayParts: SymbolDisplayPart[];
    }
    interface ReferencedSymbol {
        definition: ReferencedSymbolDefinitionInfo;
        references: ReferenceEntry[];
    }
    enum SymbolDisplayPartKind {
        aliasName = 0,
        className = 1,
        enumName = 2,
        fieldName = 3,
        interfaceName = 4,
        keyword = 5,
        lineBreak = 6,
        numericLiteral = 7,
        stringLiteral = 8,
        localName = 9,
        methodName = 10,
        moduleName = 11,
        operator = 12,
        parameterName = 13,
        propertyName = 14,
        punctuation = 15,
        space = 16,
        text = 17,
        typeParameterName = 18,
        enumMemberName = 19,
        functionName = 20,
        regularExpressionLiteral = 21,
    }
    interface SymbolDisplayPart {
        text: string;
        kind: string;
    }
    interface QuickInfo {
        kind: string;
        kindModifiers: string;
        textSpan: TextSpan;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
    }
    interface RenameInfo {
        canRename: boolean;
        localizedErrorMessage: string;
        displayName: string;
        fullDisplayName: string;
        kind: string;
        kindModifiers: string;
        triggerSpan: TextSpan;
    }
    interface SignatureHelpParameter {
        name: string;
        documentation: SymbolDisplayPart[];
        displayParts: SymbolDisplayPart[];
        isOptional: boolean;
    }
    /**
     * Represents a single signature to show in signature help.
     * The id is used for subsequent calls into the language service to ask questions about the
     * signature help item in the context of any documents that have been updated.  i.e. after
     * an edit has happened, while signature help is still active, the host can ask important
     * questions like 'what parameter is the user currently contained within?'.
     */
    interface SignatureHelpItem {
        isVariadic: boolean;
        prefixDisplayParts: SymbolDisplayPart[];
        suffixDisplayParts: SymbolDisplayPart[];
        separatorDisplayParts: SymbolDisplayPart[];
        parameters: SignatureHelpParameter[];
        documentation: SymbolDisplayPart[];
    }
    /**
     * Represents a set of signature help items, and the preferred item that should be selected.
     */
    interface SignatureHelpItems {
        items: SignatureHelpItem[];
        applicableSpan: TextSpan;
        selectedItemIndex: number;
        argumentIndex: number;
        argumentCount: number;
    }
    interface CompletionInfo {
        isGlobalCompletion: boolean;
        isMemberCompletion: boolean;
        /**
         * true when the current location also allows for a new identifier
         */
        isNewIdentifierLocation: boolean;
        entries: CompletionEntry[];
    }
    interface CompletionEntry {
        name: string;
        kind: string;
        kindModifiers: string;
        sortText: string;
        /**
          * An optional span that indicates the text to be replaced by this completion item. It will be
          * set if the required span differs from the one generated by the default replacement behavior and should
          * be used in that case
          */
        replacementSpan?: TextSpan;
    }
    interface CompletionEntryDetails {
        name: string;
        kind: string;
        kindModifiers: string;
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
    }
    interface OutliningSpan {
        /** The span of the document to actually collapse. */
        textSpan: TextSpan;
        /** The span of the document to display when the user hovers over the collapsed span. */
        hintSpan: TextSpan;
        /** The text to display in the editor for the collapsed region. */
        bannerText: string;
        /**
          * Whether or not this region should be automatically collapsed when
          * the 'Collapse to Definitions' command is invoked.
          */
        autoCollapse: boolean;
    }
    interface EmitOutput {
        outputFiles: OutputFile[];
        emitSkipped: boolean;
    }
    enum OutputFileType {
        JavaScript = 0,
        SourceMap = 1,
        Declaration = 2,
    }
    interface OutputFile {
        name: string;
        writeByteOrderMark: boolean;
        text: string;
    }
    enum EndOfLineState {
        None = 0,
        InMultiLineCommentTrivia = 1,
        InSingleQuoteStringLiteral = 2,
        InDoubleQuoteStringLiteral = 3,
        InTemplateHeadOrNoSubstitutionTemplate = 4,
        InTemplateMiddleOrTail = 5,
        InTemplateSubstitutionPosition = 6,
    }
    enum TokenClass {
        Punctuation = 0,
        Keyword = 1,
        Operator = 2,
        Comment = 3,
        Whitespace = 4,
        Identifier = 5,
        NumberLiteral = 6,
        StringLiteral = 7,
        RegExpLiteral = 8,
    }
    interface ClassificationResult {
        finalLexState: EndOfLineState;
        entries: ClassificationInfo[];
    }
    interface ClassificationInfo {
        length: number;
        classification: TokenClass;
    }
    interface Classifier {
        /**
         * Gives lexical classifications of tokens on a line without any syntactic context.
         * For instance, a token consisting of the text 'string' can be either an identifier
         * named 'string' or the keyword 'string', however, because this classifier is not aware,
         * it relies on certain heuristics to give acceptable results. For classifications where
         * speed trumps accuracy, this function is preferable; however, for true accuracy, the
         * syntactic classifier is ideal. In fact, in certain editing scenarios, combining the
         * lexical, syntactic, and semantic classifiers may issue the best user experience.
         *
         * @param text                      The text of a line to classify.
         * @param lexState                  The state of the lexical classifier at the end of the previous line.
         * @param syntacticClassifierAbsent Whether the client is *not* using a syntactic classifier.
         *                                  If there is no syntactic classifier (syntacticClassifierAbsent=true),
         *                                  certain heuristics may be used in its place; however, if there is a
         *                                  syntactic classifier (syntacticClassifierAbsent=false), certain
         *                                  classifications which may be incorrectly categorized will be given
         *                                  back as Identifiers in order to allow the syntactic classifier to
         *                                  subsume the classification.
         * @deprecated Use getLexicalClassifications instead.
         */
        getClassificationsForLine(text: string, lexState: EndOfLineState, syntacticClassifierAbsent: boolean): ClassificationResult;
        getEncodedLexicalClassifications(text: string, endOfLineState: EndOfLineState, syntacticClassifierAbsent: boolean): Classifications;
    }
    namespace ScriptElementKind {
        const unknown = "";
        const warning = "warning";
        /** predefined type (void) or keyword (class) */
        const keyword = "keyword";
        /** top level script node */
        const scriptElement = "script";
        /** module foo {} */
        const moduleElement = "module";
        /** class X {} */
        const classElement = "class";
        /** var x = class X {} */
        const localClassElement = "local class";
        /** interface Y {} */
        const interfaceElement = "interface";
        /** type T = ... */
        const typeElement = "type";
        /** enum E */
        const enumElement = "enum";
        const enumMemberElement = "const";
        /**
         * Inside module and script only
         * const v = ..
         */
        const variableElement = "var";
        /** Inside function */
        const localVariableElement = "local var";
        /**
         * Inside module and script only
         * function f() { }
         */
        const functionElement = "function";
        /** Inside function */
        const localFunctionElement = "local function";
        /** class X { [public|private]* foo() {} } */
        const memberFunctionElement = "method";
        /** class X { [public|private]* [get|set] foo:number; } */
        const memberGetAccessorElement = "getter";
        const memberSetAccessorElement = "setter";
        /**
         * class X { [public|private]* foo:number; }
         * interface Y { foo:number; }
         */
        const memberVariableElement = "property";
        /** class X { constructor() { } } */
        const constructorImplementationElement = "constructor";
        /** interface Y { ():number; } */
        const callSignatureElement = "call";
        /** interface Y { []:number; } */
        const indexSignatureElement = "index";
        /** interface Y { new():Y; } */
        const constructSignatureElement = "construct";
        /** function foo(*Y*: string) */
        const parameterElement = "parameter";
        const typeParameterElement = "type parameter";
        const primitiveType = "primitive type";
        const label = "label";
        const alias = "alias";
        const constElement = "const";
        const letElement = "let";
        const directory = "directory";
        const externalModuleName = "external module name";
    }
    namespace ScriptElementKindModifier {
        const none = "";
        const publicMemberModifier = "public";
        const privateMemberModifier = "private";
        const protectedMemberModifier = "protected";
        const exportedModifier = "export";
        const ambientModifier = "declare";
        const staticModifier = "static";
        const abstractModifier = "abstract";
    }
    class ClassificationTypeNames {
        static comment: string;
        static identifier: string;
        static keyword: string;
        static numericLiteral: string;
        static operator: string;
        static stringLiteral: string;
        static whiteSpace: string;
        static text: string;
        static punctuation: string;
        static className: string;
        static enumName: string;
        static interfaceName: string;
        static moduleName: string;
        static typeParameterName: string;
        static typeAliasName: string;
        static parameterName: string;
        static docCommentTagName: string;
        static jsxOpenTagName: string;
        static jsxCloseTagName: string;
        static jsxSelfClosingTagName: string;
        static jsxAttribute: string;
        static jsxText: string;
        static jsxAttributeStringLiteralValue: string;
    }
    enum ClassificationType {
        comment = 1,
        identifier = 2,
        keyword = 3,
        numericLiteral = 4,
        operator = 5,
        stringLiteral = 6,
        regularExpressionLiteral = 7,
        whiteSpace = 8,
        text = 9,
        punctuation = 10,
        className = 11,
        enumName = 12,
        interfaceName = 13,
        moduleName = 14,
        typeParameterName = 15,
        typeAliasName = 16,
        parameterName = 17,
        docCommentTagName = 18,
        jsxOpenTagName = 19,
        jsxCloseTagName = 20,
        jsxSelfClosingTagName = 21,
        jsxAttribute = 22,
        jsxText = 23,
        jsxAttributeStringLiteralValue = 24,
    }
}
declare namespace ts {
    const scanner: Scanner;
    const emptyArray: any[];
    enum SemanticMeaning {
        None = 0,
        Value = 1,
        Type = 2,
        Namespace = 4,
        All = 7,
    }
    function getMeaningFromDeclaration(node: Node): SemanticMeaning;
    function getMeaningFromLocation(node: Node): SemanticMeaning;
    function isCallExpressionTarget(node: Node): boolean;
    function isNewExpressionTarget(node: Node): boolean;
    function climbPastPropertyAccess(node: Node): Node;
    function getTargetLabel(referenceNode: Node, labelName: string): Identifier;
    function isJumpStatementTarget(node: Node): boolean;
    function isLabelName(node: Node): boolean;
    function isRightSideOfQualifiedName(node: Node): boolean;
    function isRightSideOfPropertyAccess(node: Node): boolean;
    function isNameOfModuleDeclaration(node: Node): boolean;
    function isNameOfFunctionDeclaration(node: Node): boolean;
    function isLiteralNameOfPropertyDeclarationOrIndexAccess(node: Node): boolean;
    function isExpressionOfExternalModuleImportEqualsDeclaration(node: Node): boolean;
    /** Returns true if the position is within a comment */
    function isInsideComment(sourceFile: SourceFile, token: Node, position: number): boolean;
    function getContainerNode(node: Node): Declaration;
    function getNodeKind(node: Node): string;
    function getStringLiteralTypeForNode(node: StringLiteral | LiteralTypeNode, typeChecker: TypeChecker): LiteralType;
    function isThis(node: Node): boolean;
    interface ListItemInfo {
        listItemIndex: number;
        list: Node;
    }
    function getLineStartPositionForPosition(position: number, sourceFile: SourceFile): number;
    function rangeContainsRange(r1: TextRange, r2: TextRange): boolean;
    function startEndContainsRange(start: number, end: number, range: TextRange): boolean;
    function rangeContainsStartEnd(range: TextRange, start: number, end: number): boolean;
    function rangeOverlapsWithStartEnd(r1: TextRange, start: number, end: number): boolean;
    function startEndOverlapsWithStartEnd(start1: number, end1: number, start2: number, end2: number): boolean;
    function positionBelongsToNode(candidate: Node, position: number, sourceFile: SourceFile): boolean;
    function isCompletedNode(n: Node, sourceFile: SourceFile): boolean;
    function findListItemInfo(node: Node): ListItemInfo;
    function hasChildOfKind(n: Node, kind: SyntaxKind, sourceFile?: SourceFile): boolean;
    function findChildOfKind(n: Node, kind: SyntaxKind, sourceFile?: SourceFile): Node;
    function findContainingList(node: Node): Node;
    function getTouchingWord(sourceFile: SourceFile, position: number, includeJsDocComment?: boolean): Node;
    function getTouchingPropertyName(sourceFile: SourceFile, position: number, includeJsDocComment?: boolean): Node;
    /** Returns the token if position is in [start, end) or if position === end and includeItemAtEndPosition(token) === true */
    function getTouchingToken(sourceFile: SourceFile, position: number, includeItemAtEndPosition?: (n: Node) => boolean, includeJsDocComment?: boolean): Node;
    /** Returns a token if position is in [start-of-leading-trivia, end) */
    function getTokenAtPosition(sourceFile: SourceFile, position: number, includeJsDocComment?: boolean): Node;
    /**
      * The token on the left of the position is the token that strictly includes the position
      * or sits to the left of the cursor if it is on a boundary. For example
      *
      *   fo|o               -> will return foo
      *   foo <comment> |bar -> will return foo
      *
      */
    function findTokenOnLeftOfPosition(file: SourceFile, position: number): Node;
    function findNextToken(previousToken: Node, parent: Node): Node;
    function findPrecedingToken(position: number, sourceFile: SourceFile, startNode?: Node): Node;
    function isInString(sourceFile: SourceFile, position: number): boolean;
    function isInComment(sourceFile: SourceFile, position: number): boolean;
    /**
     * returns true if the position is in between the open and close elements of an JSX expression.
     */
    function isInsideJsxElementOrAttribute(sourceFile: SourceFile, position: number): boolean;
    function isInTemplateString(sourceFile: SourceFile, position: number): boolean;
    /**
     * Returns true if the cursor at position in sourceFile is within a comment that additionally
     * satisfies predicate, and false otherwise.
     */
    function isInCommentHelper(sourceFile: SourceFile, position: number, predicate?: (c: CommentRange) => boolean): boolean;
    function hasDocComment(sourceFile: SourceFile, position: number): boolean;
    /**
     * Get the corresponding JSDocTag node if the position is in a jsDoc comment
     */
    function getJsDocTagAtPosition(sourceFile: SourceFile, position: number): JSDocTag;
    function getNodeModifiers(node: Node): string;
    function getTypeArgumentOrTypeParameterList(node: Node): NodeArray<Node>;
    function isToken(n: Node): boolean;
    function isWord(kind: SyntaxKind): boolean;
    function isComment(kind: SyntaxKind): boolean;
    function isStringOrRegularExpressionOrTemplateLiteral(kind: SyntaxKind): boolean;
    function isPunctuation(kind: SyntaxKind): boolean;
    function isInsideTemplateLiteral(node: LiteralExpression, position: number): boolean;
    function isAccessibilityModifier(kind: SyntaxKind): boolean;
    function compareDataObjects(dst: any, src: any): boolean;
    function isArrayLiteralOrObjectLiteralDestructuringPattern(node: Node): boolean;
    function hasTrailingDirectorySeparator(path: string): boolean;
    function isInReferenceComment(sourceFile: SourceFile, position: number): boolean;
    function isInNonReferenceComment(sourceFile: SourceFile, position: number): boolean;
}
declare namespace ts {
    function isFirstDeclarationOfSymbolParameter(symbol: Symbol): boolean;
    function symbolPart(text: string, symbol: Symbol): SymbolDisplayPart;
    function displayPart(text: string, kind: SymbolDisplayPartKind): SymbolDisplayPart;
    function spacePart(): SymbolDisplayPart;
    function keywordPart(kind: SyntaxKind): SymbolDisplayPart;
    function punctuationPart(kind: SyntaxKind): SymbolDisplayPart;
    function operatorPart(kind: SyntaxKind): SymbolDisplayPart;
    function textOrKeywordPart(text: string): SymbolDisplayPart;
    function textPart(text: string): SymbolDisplayPart;
    /**
     * The default is CRLF.
     */
    function getNewLineOrDefaultFromHost(host: LanguageServiceHost | LanguageServiceShimHost): string;
    function lineBreakPart(): SymbolDisplayPart;
    function mapToDisplayParts(writeDisplayParts: (writer: DisplayPartsSymbolWriter) => void): SymbolDisplayPart[];
    function typeToDisplayParts(typechecker: TypeChecker, type: Type, enclosingDeclaration?: Node, flags?: TypeFormatFlags): SymbolDisplayPart[];
    function symbolToDisplayParts(typeChecker: TypeChecker, symbol: Symbol, enclosingDeclaration?: Node, meaning?: SymbolFlags, flags?: SymbolFormatFlags): SymbolDisplayPart[];
    function signatureToDisplayParts(typechecker: TypeChecker, signature: Signature, enclosingDeclaration?: Node, flags?: TypeFormatFlags): SymbolDisplayPart[];
    function getDeclaredName(typeChecker: TypeChecker, symbol: Symbol, location: Node): string;
    function isImportOrExportSpecifierName(location: Node): boolean;
    /**
     * Strip off existed single quotes or double quotes from a given string
     *
     * @return non-quoted string
     */
    function stripQuotes(name: string): string;
    function scriptKindIs(fileName: string, host: LanguageServiceHost, ...scriptKinds: ScriptKind[]): boolean;
    function getScriptKind(fileName: string, host?: LanguageServiceHost): ScriptKind;
    function sanitizeConfigFile(configFileName: string, content: string): {
        configJsonObject: any;
        diagnostics: Diagnostic[];
    };
}
declare namespace ts {
    function createClassifier(): Classifier;
    function getSemanticClassifications(typeChecker: TypeChecker, cancellationToken: CancellationToken, sourceFile: SourceFile, classifiableNames: Map<string>, span: TextSpan): ClassifiedSpan[];
    function getEncodedSemanticClassifications(typeChecker: TypeChecker, cancellationToken: CancellationToken, sourceFile: SourceFile, classifiableNames: Map<string>, span: TextSpan): Classifications;
    function getSyntacticClassifications(cancellationToken: CancellationToken, sourceFile: SourceFile, span: TextSpan): ClassifiedSpan[];
    function getEncodedSyntacticClassifications(cancellationToken: CancellationToken, sourceFile: SourceFile, span: TextSpan): Classifications;
}
declare namespace ts.Completions {
    function getCompletionsAtPosition(host: LanguageServiceHost, typeChecker: TypeChecker, log: (message: string) => void, compilerOptions: CompilerOptions, sourceFile: SourceFile, position: number): CompletionInfo;
    function getCompletionEntryDetails(typeChecker: TypeChecker, log: (message: string) => void, compilerOptions: CompilerOptions, sourceFile: SourceFile, position: number, entryName: string): CompletionEntryDetails;
    function getCompletionEntrySymbol(typeChecker: TypeChecker, log: (message: string) => void, compilerOptions: CompilerOptions, sourceFile: SourceFile, position: number, entryName: string): Symbol;
}
declare namespace ts.DocumentHighlights {
    function getDocumentHighlights(typeChecker: TypeChecker, cancellationToken: CancellationToken, sourceFile: SourceFile, position: number, sourceFilesToSearch: SourceFile[]): DocumentHighlights[];
}
declare namespace ts {
    /**
      * The document registry represents a store of SourceFile objects that can be shared between
      * multiple LanguageService instances. A LanguageService instance holds on the SourceFile (AST)
      * of files in the context.
      * SourceFile objects account for most of the memory usage by the language service. Sharing
      * the same DocumentRegistry instance between different instances of LanguageService allow
      * for more efficient memory utilization since all projects will share at least the library
      * file (lib.d.ts).
      *
      * A more advanced use of the document registry is to serialize sourceFile objects to disk
      * and re-hydrate them when needed.
      *
      * To create a default DocumentRegistry, use createDocumentRegistry to create one, and pass it
      * to all subsequent createLanguageService calls.
      */
    interface DocumentRegistry {
        /**
          * Request a stored SourceFile with a given fileName and compilationSettings.
          * The first call to acquire will call createLanguageServiceSourceFile to generate
          * the SourceFile if was not found in the registry.
          *
          * @param fileName The name of the file requested
          * @param compilationSettings Some compilation settings like target affects the
          * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
          * multiple copies of the same file for different compilation settings.
          * @parm scriptSnapshot Text of the file. Only used if the file was not found
          * in the registry and a new one was created.
          * @parm version Current version of the file. Only used if the file was not found
          * in the registry and a new one was created.
          */
        acquireDocument(fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind): SourceFile;
        acquireDocumentWithKey(fileName: string, path: Path, compilationSettings: CompilerOptions, key: DocumentRegistryBucketKey, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind): SourceFile;
        /**
          * Request an updated version of an already existing SourceFile with a given fileName
          * and compilationSettings. The update will in-turn call updateLanguageServiceSourceFile
          * to get an updated SourceFile.
          *
          * @param fileName The name of the file requested
          * @param compilationSettings Some compilation settings like target affects the
          * shape of a the resulting SourceFile. This allows the DocumentRegistry to store
          * multiple copies of the same file for different compilation settings.
          * @param scriptSnapshot Text of the file.
          * @param version Current version of the file.
          */
        updateDocument(fileName: string, compilationSettings: CompilerOptions, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind): SourceFile;
        updateDocumentWithKey(fileName: string, path: Path, compilationSettings: CompilerOptions, key: DocumentRegistryBucketKey, scriptSnapshot: IScriptSnapshot, version: string, scriptKind?: ScriptKind): SourceFile;
        getKeyForCompilationSettings(settings: CompilerOptions): DocumentRegistryBucketKey;
        /**
          * Informs the DocumentRegistry that a file is not needed any longer.
          *
          * Note: It is not allowed to call release on a SourceFile that was not acquired from
          * this registry originally.
          *
          * @param fileName The name of the file to be released
          * @param compilationSettings The compilation settings used to acquire the file
          */
        releaseDocument(fileName: string, compilationSettings: CompilerOptions): void;
        releaseDocumentWithKey(path: Path, key: DocumentRegistryBucketKey): void;
        reportStats(): string;
    }
    type DocumentRegistryBucketKey = string & {
        __bucketKey: any;
    };
    function createDocumentRegistry(useCaseSensitiveFileNames?: boolean, currentDirectory?: string): DocumentRegistry;
}
declare namespace ts.FindAllReferences {
    function findReferencedSymbols(typeChecker: TypeChecker, cancellationToken: CancellationToken, sourceFiles: SourceFile[], sourceFile: SourceFile, position: number, findInStrings: boolean, findInComments: boolean): ReferencedSymbol[];
    function getReferencedSymbolsForNode(typeChecker: TypeChecker, cancellationToken: CancellationToken, node: Node, sourceFiles: SourceFile[], findInStrings: boolean, findInComments: boolean, implementations: boolean): ReferencedSymbol[];
    function convertReferences(referenceSymbols: ReferencedSymbol[]): ReferenceEntry[];
    function getReferenceEntriesForShorthandPropertyAssignment(node: Node, typeChecker: TypeChecker, result: ReferenceEntry[]): void;
    function getReferenceEntryFromNode(node: Node): ReferenceEntry;
}
declare namespace ts.GoToDefinition {
    function getDefinitionAtPosition(program: Program, sourceFile: SourceFile, position: number): DefinitionInfo[];
    function getTypeDefinitionAtPosition(typeChecker: TypeChecker, sourceFile: SourceFile, position: number): DefinitionInfo[];
}
declare namespace ts.GoToImplementation {
    function getImplementationAtPosition(typeChecker: TypeChecker, cancellationToken: CancellationToken, sourceFiles: SourceFile[], node: Node): ImplementationLocation[];
}
declare namespace ts.JsDoc {
    function getJsDocCommentsFromDeclarations(declarations: Declaration[]): SymbolDisplayPart[];
    function getAllJsDocCompletionEntries(): CompletionEntry[];
    /**
     * Checks if position points to a valid position to add JSDoc comments, and if so,
     * returns the appropriate template. Otherwise returns an empty string.
     * Valid positions are
     *      - outside of comments, statements, and expressions, and
     *      - preceding a:
     *          - function/constructor/method declaration
     *          - class declarations
     *          - variable statements
     *          - namespace declarations
     *
     * Hosts should ideally check that:
     * - The line is all whitespace up to 'position' before performing the insertion.
     * - If the keystroke sequence "/\*\*" induced the call, we also check that the next
     * non-whitespace character is '*', which (approximately) indicates whether we added
     * the second '*' to complete an existing (JSDoc) comment.
     * @param fileName The file in which to perform the check.
     * @param position The (character-indexed) position in the file where the check should
     * be performed.
     */
    function getDocCommentTemplateAtPosition(newLine: string, sourceFile: SourceFile, position: number): TextInsertion;
}
declare namespace ts.JsTyping {
    interface TypingResolutionHost {
        directoryExists: (path: string) => boolean;
        fileExists: (fileName: string) => boolean;
        readFile: (path: string, encoding?: string) => string;
        readDirectory: (rootDir: string, extensions: string[], excludes: string[], includes: string[], depth?: number) => string[];
    }
    const nodeCoreModuleList: ReadonlyArray<string>;
    /**
     * @param host is the object providing I/O related operations.
     * @param fileNames are the file names that belong to the same project
     * @param projectRootPath is the path to the project root directory
     * @param safeListPath is the path used to retrieve the safe list
     * @param packageNameToTypingLocation is the map of package names to their cached typing locations
     * @param typingOptions are used to customize the typing inference process
     * @param compilerOptions are used as a source for typing inference
     */
    function discoverTypings(host: TypingResolutionHost, fileNames: string[], projectRootPath: Path, safeListPath: Path, packageNameToTypingLocation: Map<string>, typingOptions: TypingOptions, unresolvedImports: ReadonlyArray<string>): {
        cachedTypingPaths: string[];
        newTypingNames: string[];
        filesToWatch: string[];
    };
}
declare namespace ts.NavigateTo {
    function getNavigateToItems(sourceFiles: SourceFile[], checker: TypeChecker, cancellationToken: CancellationToken, searchValue: string, maxResultCount: number, excludeDtsFiles: boolean): NavigateToItem[];
}
declare namespace ts.NavigationBar {
    function getNavigationBarItems(sourceFile: SourceFile): NavigationBarItem[];
    function getNavigationTree(sourceFile: SourceFile): NavigationTree;
}
declare namespace ts.OutliningElementsCollector {
    function collectElements(sourceFile: SourceFile): OutliningSpan[];
}
declare namespace ts {
    enum PatternMatchKind {
        exact = 0,
        prefix = 1,
        substring = 2,
        camelCase = 3,
    }
    interface PatternMatch {
        kind: PatternMatchKind;
        camelCaseWeight?: number;
        isCaseSensitive: boolean;
        punctuationStripped: boolean;
    }
    interface PatternMatcher {
        getMatchesForLastSegmentOfPattern(candidate: string): PatternMatch[];
        getMatches(candidateContainers: string[], candidate: string): PatternMatch[];
        patternContainsDots: boolean;
    }
    function createPatternMatcher(pattern: string): PatternMatcher;
    function breakIntoCharacterSpans(identifier: string): TextSpan[];
    function breakIntoWordSpans(identifier: string): TextSpan[];
}
declare namespace ts {
    function preProcessFile(sourceText: string, readImportFiles?: boolean, detectJavaScriptImports?: boolean): PreProcessedFileInfo;
}
declare namespace ts.Rename {
    function getRenameInfo(typeChecker: TypeChecker, defaultLibFileName: string, getCanonicalFileName: (fileName: string) => string, sourceFile: SourceFile, position: number): RenameInfo;
}
declare namespace ts.SignatureHelp {
    enum ArgumentListKind {
        TypeArguments = 0,
        CallArguments = 1,
        TaggedTemplateArguments = 2,
    }
    interface ArgumentListInfo {
        kind: ArgumentListKind;
        invocation: CallLikeExpression;
        argumentsSpan: TextSpan;
        argumentIndex?: number;
        argumentCount: number;
    }
    function getSignatureHelpItems(program: Program, sourceFile: SourceFile, position: number, cancellationToken: CancellationToken): SignatureHelpItems;
    function getContainingArgumentInfo(node: Node, position: number, sourceFile: SourceFile): ArgumentListInfo;
}
declare namespace ts.SymbolDisplay {
    function getSymbolKind(typeChecker: TypeChecker, symbol: Symbol, location: Node): string;
    function getSymbolModifiers(symbol: Symbol): string;
    function getSymbolDisplayPartsDocumentationAndSymbolKind(typeChecker: TypeChecker, symbol: Symbol, sourceFile: SourceFile, enclosingDeclaration: Node, location: Node, semanticMeaning?: SemanticMeaning): {
        displayParts: SymbolDisplayPart[];
        documentation: SymbolDisplayPart[];
        symbolKind: string;
    };
}
declare namespace ts {
    interface TranspileOptions {
        compilerOptions?: CompilerOptions;
        fileName?: string;
        reportDiagnostics?: boolean;
        moduleName?: string;
        renamedDependencies?: MapLike<string>;
    }
    interface TranspileOutput {
        outputText: string;
        diagnostics?: Diagnostic[];
        sourceMapText?: string;
    }
    function transpileModule(input: string, transpileOptions: TranspileOptions): TranspileOutput;
    function transpile(input: string, compilerOptions?: CompilerOptions, fileName?: string, diagnostics?: Diagnostic[], moduleName?: string): string;
}
declare namespace ts.formatting {
    interface FormattingScanner {
        advance(): void;
        isOnToken(): boolean;
        readTokenInfo(n: Node): TokenInfo;
        getCurrentLeadingTrivia(): TextRangeWithKind[];
        lastTrailingTriviaWasNewLine(): boolean;
        skipToEndOf(node: Node): void;
        close(): void;
    }
    function getFormattingScanner(sourceFile: SourceFile, startPos: number, endPos: number): FormattingScanner;
}
declare namespace ts.formatting {
    class FormattingContext {
        sourceFile: SourceFile;
        formattingRequestKind: FormattingRequestKind;
        currentTokenSpan: TextRangeWithKind;
        nextTokenSpan: TextRangeWithKind;
        contextNode: Node;
        currentTokenParent: Node;
        nextTokenParent: Node;
        private contextNodeAllOnSameLine;
        private nextNodeAllOnSameLine;
        private tokensAreOnSameLine;
        private contextNodeBlockIsOnOneLine;
        private nextNodeBlockIsOnOneLine;
        constructor(sourceFile: SourceFile, formattingRequestKind: FormattingRequestKind);
        updateContext(currentRange: TextRangeWithKind, currentTokenParent: Node, nextRange: TextRangeWithKind, nextTokenParent: Node, commonParent: Node): void;
        ContextNodeAllOnSameLine(): boolean;
        NextNodeAllOnSameLine(): boolean;
        TokensAreOnSameLine(): boolean;
        ContextNodeBlockIsOnOneLine(): boolean;
        NextNodeBlockIsOnOneLine(): boolean;
        private NodeIsOnOneLine(node);
        private BlockIsOnOneLine(node);
    }
}
declare namespace ts.formatting {
    enum FormattingRequestKind {
        FormatDocument = 0,
        FormatSelection = 1,
        FormatOnEnter = 2,
        FormatOnSemicolon = 3,
        FormatOnClosingCurlyBrace = 4,
    }
}
declare namespace ts.formatting {
    class Rule {
        Descriptor: RuleDescriptor;
        Operation: RuleOperation;
        Flag: RuleFlags;
        constructor(Descriptor: RuleDescriptor, Operation: RuleOperation, Flag?: RuleFlags);
        toString(): string;
    }
}
declare namespace ts.formatting {
    enum RuleAction {
        Ignore = 1,
        Space = 2,
        NewLine = 4,
        Delete = 8,
    }
}
declare namespace ts.formatting {
    class RuleDescriptor {
        LeftTokenRange: Shared.TokenRange;
        RightTokenRange: Shared.TokenRange;
        constructor(LeftTokenRange: Shared.TokenRange, RightTokenRange: Shared.TokenRange);
        toString(): string;
        static create1(left: SyntaxKind, right: SyntaxKind): RuleDescriptor;
        static create2(left: Shared.TokenRange, right: SyntaxKind): RuleDescriptor;
        static create3(left: SyntaxKind, right: Shared.TokenRange): RuleDescriptor;
        static create4(left: Shared.TokenRange, right: Shared.TokenRange): RuleDescriptor;
    }
}
declare namespace ts.formatting {
    enum RuleFlags {
        None = 0,
        CanDeleteNewLines = 1,
    }
}
declare namespace ts.formatting {
    class RuleOperation {
        Context: RuleOperationContext;
        Action: RuleAction;
        constructor(Context: RuleOperationContext, Action: RuleAction);
        toString(): string;
        static create1(action: RuleAction): RuleOperation;
        static create2(context: RuleOperationContext, action: RuleAction): RuleOperation;
    }
}
declare namespace ts.formatting {
    class RuleOperationContext {
        private customContextChecks;
        constructor(...funcs: {
            (context: FormattingContext): boolean;
        }[]);
        static Any: RuleOperationContext;
        IsAny(): boolean;
        InContext(context: FormattingContext): boolean;
    }
}
declare namespace ts.formatting {
    class Rules {
        getRuleName(rule: Rule): string;
        [name: string]: any;
        IgnoreBeforeComment: Rule;
        IgnoreAfterLineComment: Rule;
        NoSpaceBeforeSemicolon: Rule;
        NoSpaceBeforeColon: Rule;
        NoSpaceBeforeQuestionMark: Rule;
        SpaceAfterColon: Rule;
        SpaceAfterQuestionMarkInConditionalOperator: Rule;
        NoSpaceAfterQuestionMark: Rule;
        SpaceAfterSemicolon: Rule;
        SpaceAfterCloseBrace: Rule;
        SpaceBetweenCloseBraceAndElse: Rule;
        SpaceBetweenCloseBraceAndWhile: Rule;
        NoSpaceAfterCloseBrace: Rule;
        NoSpaceBeforeDot: Rule;
        NoSpaceAfterDot: Rule;
        NoSpaceBeforeOpenBracket: Rule;
        NoSpaceAfterCloseBracket: Rule;
        SpaceAfterOpenBrace: Rule;
        SpaceBeforeCloseBrace: Rule;
        NoSpaceAfterOpenBrace: Rule;
        NoSpaceBeforeCloseBrace: Rule;
        NoSpaceBetweenEmptyBraceBrackets: Rule;
        NewLineAfterOpenBraceInBlockContext: Rule;
        NewLineBeforeCloseBraceInBlockContext: Rule;
        NoSpaceAfterUnaryPrefixOperator: Rule;
        NoSpaceAfterUnaryPreincrementOperator: Rule;
        NoSpaceAfterUnaryPredecrementOperator: Rule;
        NoSpaceBeforeUnaryPostincrementOperator: Rule;
        NoSpaceBeforeUnaryPostdecrementOperator: Rule;
        SpaceAfterPostincrementWhenFollowedByAdd: Rule;
        SpaceAfterAddWhenFollowedByUnaryPlus: Rule;
        SpaceAfterAddWhenFollowedByPreincrement: Rule;
        SpaceAfterPostdecrementWhenFollowedBySubtract: Rule;
        SpaceAfterSubtractWhenFollowedByUnaryMinus: Rule;
        SpaceAfterSubtractWhenFollowedByPredecrement: Rule;
        NoSpaceBeforeComma: Rule;
        SpaceAfterCertainKeywords: Rule;
        SpaceAfterLetConstInVariableDeclaration: Rule;
        NoSpaceBeforeOpenParenInFuncCall: Rule;
        SpaceAfterFunctionInFuncDecl: Rule;
        NoSpaceBeforeOpenParenInFuncDecl: Rule;
        SpaceAfterVoidOperator: Rule;
        NoSpaceBetweenReturnAndSemicolon: Rule;
        SpaceBetweenStatements: Rule;
        SpaceAfterTryFinally: Rule;
        SpaceAfterGetSetInMember: Rule;
        SpaceBeforeBinaryKeywordOperator: Rule;
        SpaceAfterBinaryKeywordOperator: Rule;
        NoSpaceAfterConstructor: Rule;
        NoSpaceAfterModuleImport: Rule;
        SpaceAfterCertainTypeScriptKeywords: Rule;
        SpaceBeforeCertainTypeScriptKeywords: Rule;
        SpaceAfterModuleName: Rule;
        SpaceBeforeArrow: Rule;
        SpaceAfterArrow: Rule;
        NoSpaceAfterEllipsis: Rule;
        NoSpaceAfterOptionalParameters: Rule;
        NoSpaceBeforeOpenAngularBracket: Rule;
        NoSpaceBetweenCloseParenAndAngularBracket: Rule;
        NoSpaceAfterOpenAngularBracket: Rule;
        NoSpaceBeforeCloseAngularBracket: Rule;
        NoSpaceAfterCloseAngularBracket: Rule;
        NoSpaceBetweenEmptyInterfaceBraceBrackets: Rule;
        HighPriorityCommonRules: Rule[];
        LowPriorityCommonRules: Rule[];
        SpaceAfterComma: Rule;
        NoSpaceAfterComma: Rule;
        SpaceBeforeBinaryOperator: Rule;
        SpaceAfterBinaryOperator: Rule;
        NoSpaceBeforeBinaryOperator: Rule;
        NoSpaceAfterBinaryOperator: Rule;
        SpaceAfterKeywordInControl: Rule;
        NoSpaceAfterKeywordInControl: Rule;
        FunctionOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInFunction: Rule;
        NewLineBeforeOpenBraceInFunction: Rule;
        TypeScriptOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInTypeScriptDeclWithBlock: Rule;
        NewLineBeforeOpenBraceInTypeScriptDeclWithBlock: Rule;
        ControlOpenBraceLeftTokenRange: Shared.TokenRange;
        SpaceBeforeOpenBraceInControl: Rule;
        NewLineBeforeOpenBraceInControl: Rule;
        SpaceAfterSemicolonInFor: Rule;
        NoSpaceAfterSemicolonInFor: Rule;
        SpaceAfterOpenParen: Rule;
        SpaceBeforeCloseParen: Rule;
        NoSpaceBetweenParens: Rule;
        NoSpaceAfterOpenParen: Rule;
        NoSpaceBeforeCloseParen: Rule;
        SpaceAfterOpenBracket: Rule;
        SpaceBeforeCloseBracket: Rule;
        NoSpaceBetweenBrackets: Rule;
        NoSpaceAfterOpenBracket: Rule;
        NoSpaceBeforeCloseBracket: Rule;
        SpaceAfterAnonymousFunctionKeyword: Rule;
        NoSpaceAfterAnonymousFunctionKeyword: Rule;
        SpaceBeforeAt: Rule;
        NoSpaceAfterAt: Rule;
        SpaceAfterDecorator: Rule;
        NoSpaceBetweenFunctionKeywordAndStar: Rule;
        SpaceAfterStarInGeneratorDeclaration: Rule;
        NoSpaceBetweenYieldKeywordAndStar: Rule;
        SpaceBetweenYieldOrYieldStarAndOperand: Rule;
        SpaceBetweenAsyncAndOpenParen: Rule;
        SpaceBetweenAsyncAndFunctionKeyword: Rule;
        NoSpaceBetweenTagAndTemplateString: Rule;
        NoSpaceAfterTemplateHeadAndMiddle: Rule;
        SpaceAfterTemplateHeadAndMiddle: Rule;
        NoSpaceBeforeTemplateMiddleAndTail: Rule;
        SpaceBeforeTemplateMiddleAndTail: Rule;
        NoSpaceAfterOpenBraceInJsxExpression: Rule;
        SpaceAfterOpenBraceInJsxExpression: Rule;
        NoSpaceBeforeCloseBraceInJsxExpression: Rule;
        SpaceBeforeCloseBraceInJsxExpression: Rule;
        SpaceBeforeJsxAttribute: Rule;
        SpaceBeforeSlashInJsxOpeningElement: Rule;
        NoSpaceBeforeGreaterThanTokenInJsxOpeningElement: Rule;
        NoSpaceBeforeEqualInJsxAttribute: Rule;
        NoSpaceAfterEqualInJsxAttribute: Rule;
        NoSpaceAfterTypeAssertion: Rule;
        SpaceAfterTypeAssertion: Rule;
        constructor();
        static IsForContext(context: FormattingContext): boolean;
        static IsNotForContext(context: FormattingContext): boolean;
        static IsBinaryOpContext(context: FormattingContext): boolean;
        static IsNotBinaryOpContext(context: FormattingContext): boolean;
        static IsConditionalOperatorContext(context: FormattingContext): boolean;
        static IsSameLineTokenOrBeforeMultilineBlockContext(context: FormattingContext): boolean;
        static IsBeforeMultilineBlockContext(context: FormattingContext): boolean;
        static IsMultilineBlockContext(context: FormattingContext): boolean;
        static IsSingleLineBlockContext(context: FormattingContext): boolean;
        static IsBlockContext(context: FormattingContext): boolean;
        static IsBeforeBlockContext(context: FormattingContext): boolean;
        static NodeIsBlockContext(node: Node): boolean;
        static IsFunctionDeclContext(context: FormattingContext): boolean;
        static IsFunctionDeclarationOrFunctionExpressionContext(context: FormattingContext): boolean;
        static IsTypeScriptDeclWithBlockContext(context: FormattingContext): boolean;
        static NodeIsTypeScriptDeclWithBlockContext(node: Node): boolean;
        static IsAfterCodeBlockContext(context: FormattingContext): boolean;
        static IsControlDeclContext(context: FormattingContext): boolean;
        static IsObjectContext(context: FormattingContext): boolean;
        static IsFunctionCallContext(context: FormattingContext): boolean;
        static IsNewContext(context: FormattingContext): boolean;
        static IsFunctionCallOrNewContext(context: FormattingContext): boolean;
        static IsPreviousTokenNotComma(context: FormattingContext): boolean;
        static IsNextTokenNotCloseBracket(context: FormattingContext): boolean;
        static IsArrowFunctionContext(context: FormattingContext): boolean;
        static IsNonJsxSameLineTokenContext(context: FormattingContext): boolean;
        static IsNonJsxElementContext(context: FormattingContext): boolean;
        static IsJsxExpressionContext(context: FormattingContext): boolean;
        static IsNextTokenParentJsxAttribute(context: FormattingContext): boolean;
        static IsJsxAttributeContext(context: FormattingContext): boolean;
        static IsJsxSelfClosingElementContext(context: FormattingContext): boolean;
        static IsNotBeforeBlockInFunctionDeclarationContext(context: FormattingContext): boolean;
        static IsEndOfDecoratorContextOnSameLine(context: FormattingContext): boolean;
        static NodeIsInDecoratorContext(node: Node): boolean;
        static IsStartOfVariableDeclarationList(context: FormattingContext): boolean;
        static IsNotFormatOnEnter(context: FormattingContext): boolean;
        static IsModuleDeclContext(context: FormattingContext): boolean;
        static IsObjectTypeContext(context: FormattingContext): boolean;
        static IsTypeArgumentOrParameterOrAssertion(token: TextRangeWithKind, parent: Node): boolean;
        static IsTypeArgumentOrParameterOrAssertionContext(context: FormattingContext): boolean;
        static IsTypeAssertionContext(context: FormattingContext): boolean;
        static IsVoidOpContext(context: FormattingContext): boolean;
        static IsYieldOrYieldStarWithOperand(context: FormattingContext): boolean;
    }
}
declare namespace ts.formatting {
    class RulesMap {
        map: RulesBucket[];
        mapRowLength: number;
        constructor();
        static create(rules: Rule[]): RulesMap;
        Initialize(rules: Rule[]): RulesBucket[];
        FillRules(rules: Rule[], rulesBucketConstructionStateList: RulesBucketConstructionState[]): void;
        private GetRuleBucketIndex(row, column);
        private FillRule(rule, rulesBucketConstructionStateList);
        GetRule(context: FormattingContext): Rule;
    }
    enum RulesPosition {
        IgnoreRulesSpecific = 0,
        IgnoreRulesAny,
        ContextRulesSpecific,
        ContextRulesAny,
        NoContextRulesSpecific,
        NoContextRulesAny,
    }
    class RulesBucketConstructionState {
        private rulesInsertionIndexBitmap;
        constructor();
        GetInsertionIndex(maskPosition: RulesPosition): number;
        IncreaseInsertionIndex(maskPosition: RulesPosition): void;
    }
    class RulesBucket {
        private rules;
        constructor();
        Rules(): Rule[];
        AddRule(rule: Rule, specificTokens: boolean, constructionState: RulesBucketConstructionState[], rulesBucketIndex: number): void;
    }
}
declare namespace ts.formatting {
    namespace Shared {
        interface ITokenAccess {
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
        }
        class TokenRangeAccess implements ITokenAccess {
            private tokens;
            constructor(from: SyntaxKind, to: SyntaxKind, except: SyntaxKind[]);
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
        }
        class TokenValuesAccess implements ITokenAccess {
            private tokens;
            constructor(tks: SyntaxKind[]);
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
        }
        class TokenSingleValueAccess implements ITokenAccess {
            token: SyntaxKind;
            constructor(token: SyntaxKind);
            GetTokens(): SyntaxKind[];
            Contains(tokenValue: SyntaxKind): boolean;
        }
        class TokenAllAccess implements ITokenAccess {
            GetTokens(): SyntaxKind[];
            Contains(): boolean;
            toString(): string;
        }
        class TokenRange {
            tokenAccess: ITokenAccess;
            constructor(tokenAccess: ITokenAccess);
            static FromToken(token: SyntaxKind): TokenRange;
            static FromTokens(tokens: SyntaxKind[]): TokenRange;
            static FromRange(f: SyntaxKind, to: SyntaxKind, except?: SyntaxKind[]): TokenRange;
            static AllTokens(): TokenRange;
            GetTokens(): SyntaxKind[];
            Contains(token: SyntaxKind): boolean;
            toString(): string;
            static Any: TokenRange;
            static AnyIncludingMultilineComments: TokenRange;
            static Keywords: TokenRange;
            static BinaryOperators: TokenRange;
            static BinaryKeywordOperators: TokenRange;
            static UnaryPrefixOperators: TokenRange;
            static UnaryPrefixExpressions: TokenRange;
            static UnaryPreincrementExpressions: TokenRange;
            static UnaryPostincrementExpressions: TokenRange;
            static UnaryPredecrementExpressions: TokenRange;
            static UnaryPostdecrementExpressions: TokenRange;
            static Comments: TokenRange;
            static TypeNames: TokenRange;
        }
    }
}
declare namespace ts.formatting {
    class RulesProvider {
        private globalRules;
        private options;
        private activeRules;
        private rulesMap;
        constructor();
        getRuleName(rule: Rule): string;
        getRuleByName(name: string): Rule;
        getRulesMap(): RulesMap;
        ensureUpToDate(options: ts.FormatCodeSettings): void;
        private createActiveRules(options);
    }
}
declare namespace ts.formatting {
    interface TextRangeWithKind extends TextRange {
        kind: SyntaxKind;
    }
    interface TokenInfo {
        leadingTrivia: TextRangeWithKind[];
        token: TextRangeWithKind;
        trailingTrivia: TextRangeWithKind[];
    }
    function formatOnEnter(position: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatOnSemicolon(position: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatOnClosingCurly(position: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatDocument(sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function formatSelection(start: number, end: number, sourceFile: SourceFile, rulesProvider: RulesProvider, options: FormatCodeSettings): TextChange[];
    function getIndentationString(indentation: number, options: EditorSettings): string;
}
declare namespace ts.formatting {
    namespace SmartIndenter {
        function getIndentation(position: number, sourceFile: SourceFile, options: EditorSettings): number;
        function getIndentationForNode(n: Node, ignoreActualIndentationRange: TextRange, sourceFile: SourceFile, options: EditorSettings): number;
        function getBaseIndentation(options: EditorSettings): number;
        function childStartsOnTheSameLineWithElseInIfStatement(parent: Node, child: TextRangeWithKind, childStartLine: number, sourceFile: SourceFile): boolean;
        function findFirstNonWhitespaceCharacterAndColumn(startPos: number, endPos: number, sourceFile: SourceFile, options: EditorSettings): {
            column: number;
            character: number;
        };
        function findFirstNonWhitespaceColumn(startPos: number, endPos: number, sourceFile: SourceFile, options: EditorSettings): number;
        function nodeWillIndentChild(parent: TextRangeWithKind, child: TextRangeWithKind, indentByDefault: boolean): boolean;
        function shouldIndentChildNode(parent: TextRangeWithKind, child?: TextRangeWithKind): boolean;
    }
}
declare namespace ts {
    interface CodeFix {
        errorCodes: number[];
        getCodeActions(context: CodeFixContext): CodeAction[] | undefined;
    }
    interface CodeFixContext {
        errorCode: number;
        sourceFile: SourceFile;
        span: TextSpan;
        program: Program;
        newLineCharacter: string;
    }
    namespace codefix {
        function registerCodeFix(action: CodeFix): void;
        function getSupportedErrorCodes(): string[];
        function getFixes(context: CodeFixContext): CodeAction[];
    }
}
declare namespace ts.codefix {
}
declare namespace ts.codefix {
}
declare namespace ts {
    /** The version of the language service API */
    const servicesVersion = "0.5";
    interface DisplayPartsSymbolWriter extends SymbolWriter {
        displayParts(): SymbolDisplayPart[];
    }
    function toEditorSettings(options: FormatCodeOptions | FormatCodeSettings): FormatCodeSettings;
    function toEditorSettings(options: EditorOptions | EditorSettings): EditorSettings;
    function displayPartsToString(displayParts: SymbolDisplayPart[]): string;
    function getDefaultCompilerOptions(): CompilerOptions;
    function getSupportedCodeFixes(): string[];
    function createLanguageServiceSourceFile(fileName: string, scriptSnapshot: IScriptSnapshot, scriptTarget: ScriptTarget, version: string, setNodeParents: boolean, scriptKind?: ScriptKind): SourceFile;
    let disableIncrementalParsing: boolean;
    function updateLanguageServiceSourceFile(sourceFile: SourceFile, scriptSnapshot: IScriptSnapshot, version: string, textChangeRange: TextChangeRange, aggressiveChecks?: boolean): SourceFile;
    function createLanguageService(host: LanguageServiceHost, documentRegistry?: DocumentRegistry): LanguageService;
    function getNameTable(sourceFile: SourceFile): Map<number>;
    /**
      * Get the path of the default library files (lib.d.ts) as distributed with the typescript
      * node package.
      * The functionality is not supported if the ts module is consumed outside of a node module.
      */
    function getDefaultLibFilePath(options: CompilerOptions): string;
}
declare namespace ts.BreakpointResolver {
    /**
     * Get the breakpoint span in given sourceFile
     */
    function spanInSourceFileAtLocation(sourceFile: SourceFile, position: number): TextSpan;
}
declare let debugObjectHost: any;
declare namespace ts {
    interface ScriptSnapshotShim {
        /** Gets a portion of the script snapshot specified by [start, end). */
        getText(start: number, end: number): string;
        /** Gets the length of this script snapshot. */
        getLength(): number;
        /**
         * Returns a JSON-encoded value of the type:
         *   { span: { start: number; length: number }; newLength: number }
         *
         * Or undefined value if there was no change.
         */
        getChangeRange(oldSnapshot: ScriptSnapshotShim): string;
        /** Releases all resources held by this script snapshot */
        dispose?(): void;
    }
    interface Logger {
        log(s: string): void;
        trace(s: string): void;
        error(s: string): void;
    }
    /** Public interface of the host of a language service shim instance.*/
    interface LanguageServiceShimHost extends Logger {
        getCompilationSettings(): string;
        /** Returns a JSON-encoded value of the type: string[] */
        getScriptFileNames(): string;
        getScriptKind?(fileName: string): ScriptKind;
        getScriptVersion(fileName: string): string;
        getScriptSnapshot(fileName: string): ScriptSnapshotShim;
        getLocalizedDiagnosticMessages(): string;
        getCancellationToken(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDirectories(path: string): string;
        getDefaultLibFileName(options: string): string;
        getNewLine?(): string;
        getProjectVersion?(): string;
        useCaseSensitiveFileNames?(): boolean;
        getTypeRootsVersion?(): number;
        readDirectory(rootDir: string, extension: string, basePaths?: string, excludeEx?: string, includeFileEx?: string, includeDirEx?: string, depth?: number): string;
        readFile(path: string, encoding?: string): string;
        fileExists(path: string): boolean;
        getModuleResolutionsForFile?(fileName: string): string;
        getTypeReferenceDirectiveResolutionsForFile?(fileName: string): string;
        directoryExists(directoryName: string): boolean;
    }
    /** Public interface of the core-services host instance used in managed side */
    interface CoreServicesShimHost extends Logger {
        directoryExists(directoryName: string): boolean;
        fileExists(fileName: string): boolean;
        getCurrentDirectory(): string;
        getDirectories(path: string): string;
        /**
         * Returns a JSON-encoded value of the type: string[]
         *
         * @param exclude A JSON encoded string[] containing the paths to exclude
         *  when enumerating the directory.
         */
        readDirectory(rootDir: string, extension: string, basePaths?: string, excludeEx?: string, includeFileEx?: string, includeDirEx?: string, depth?: number): string;
        /**
         * Read arbitary text files on disk, i.e. when resolution procedure needs the content of 'package.json' to determine location of bundled typings for node modules
         */
        readFile(fileName: string): string;
        realpath?(path: string): string;
        trace(s: string): void;
        useCaseSensitiveFileNames?(): boolean;
    }
    interface IFileReference {
        path: string;
        position: number;
        length: number;
    }
    /** Public interface of a language service instance shim. */
    interface ShimFactory {
        registerShim(shim: Shim): void;
        unregisterShim(shim: Shim): void;
    }
    interface Shim {
        dispose(_dummy: any): void;
    }
    interface LanguageServiceShim extends Shim {
        languageService: LanguageService;
        dispose(_dummy: any): void;
        refresh(throwOnError: boolean): void;
        cleanupSemanticCache(): void;
        getSyntacticDiagnostics(fileName: string): string;
        getSemanticDiagnostics(fileName: string): string;
        getCompilerOptionsDiagnostics(): string;
        getSyntacticClassifications(fileName: string, start: number, length: number): string;
        getSemanticClassifications(fileName: string, start: number, length: number): string;
        getEncodedSyntacticClassifications(fileName: string, start: number, length: number): string;
        getEncodedSemanticClassifications(fileName: string, start: number, length: number): string;
        getCompletionsAtPosition(fileName: string, position: number): string;
        getCompletionEntryDetails(fileName: string, position: number, entryName: string): string;
        getQuickInfoAtPosition(fileName: string, position: number): string;
        getNameOrDottedNameSpan(fileName: string, startPos: number, endPos: number): string;
        getBreakpointStatementAtPosition(fileName: string, position: number): string;
        getSignatureHelpItems(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { canRename: boolean, localizedErrorMessage: string, displayName: string, fullDisplayName: string, kind: string, kindModifiers: string, triggerSpan: { start; length } }
         */
        getRenameInfo(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string, textSpan: { start: number, length: number } }[]
         */
        findRenameLocations(fileName: string, position: number, findInStrings: boolean, findInComments: boolean): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; kind: string; name: string; containerKind: string; containerName: string }
         *
         * Or undefined value if no definition can be found.
         */
        getDefinitionAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; kind: string; name: string; containerKind: string; containerName: string }
         *
         * Or undefined value if no definition can be found.
         */
        getTypeDefinitionAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; }[]
         */
        getImplementationAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; isWriteAccess: boolean, isDefinition?: boolean }[]
         */
        getReferencesAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { definition: <encoded>; references: <encoded>[] }[]
         */
        findReferences(fileName: string, position: number): string;
        /**
         * @deprecated
         * Returns a JSON-encoded value of the type:
         * { fileName: string; textSpan: { start: number; length: number}; isWriteAccess: boolean }[]
         */
        getOccurrencesAtPosition(fileName: string, position: number): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { fileName: string; highlights: { start: number; length: number, isDefinition: boolean }[] }[]
         *
         * @param fileToSearch A JSON encoded string[] containing the file names that should be
         *  considered when searching.
         */
        getDocumentHighlights(fileName: string, position: number, filesToSearch: string): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { name: string; kind: string; kindModifiers: string; containerName: string; containerKind: string; matchKind: string; fileName: string; textSpan: { start: number; length: number}; } [] = [];
         */
        getNavigateToItems(searchValue: string, maxResultCount?: number, fileName?: string): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { text: string; kind: string; kindModifiers: string; bolded: boolean; grayed: boolean; indent: number; spans: { start: number; length: number; }[]; childItems: <recursive use of this type>[] } [] = [];
         */
        getNavigationBarItems(fileName: string): string;
        /** Returns a JSON-encoded value of the type ts.NavigationTree. */
        getNavigationTree(fileName: string): string;
        /**
         * Returns a JSON-encoded value of the type:
         * { textSpan: { start: number, length: number }; hintSpan: { start: number, length: number }; bannerText: string; autoCollapse: boolean } [] = [];
         */
        getOutliningSpans(fileName: string): string;
        getTodoComments(fileName: string, todoCommentDescriptors: string): string;
        getBraceMatchingAtPosition(fileName: string, position: number): string;
        getIndentationAtPosition(fileName: string, position: number, options: string): string;
        getFormattingEditsForRange(fileName: string, start: number, end: number, options: string): string;
        getFormattingEditsForDocument(fileName: string, options: string): string;
        getFormattingEditsAfterKeystroke(fileName: string, position: number, key: string, options: string): string;
        /**
         * Returns JSON-encoded value of the type TextInsertion.
         */
        getDocCommentTemplateAtPosition(fileName: string, position: number): string;
        /**
         * Returns JSON-encoded boolean to indicate whether we should support brace location
         * at the current position.
         * E.g. we don't want brace completion inside string-literals, comments, etc.
         */
        isValidBraceCompletionAtPosition(fileName: string, position: number, openingBrace: number): string;
        getEmitOutput(fileName: string): string;
        getEmitOutputObject(fileName: string): EmitOutput;
    }
    interface ClassifierShim extends Shim {
        getEncodedLexicalClassifications(text: string, lexState: EndOfLineState, syntacticClassifierAbsent?: boolean): string;
        getClassificationsForLine(text: string, lexState: EndOfLineState, syntacticClassifierAbsent?: boolean): string;
    }
    interface CoreServicesShim extends Shim {
        getAutomaticTypeDirectiveNames(compilerOptionsJson: string): string;
        getPreProcessedFileInfo(fileName: string, sourceText: IScriptSnapshot): string;
        getTSConfigFileInfo(fileName: string, sourceText: IScriptSnapshot): string;
        getDefaultCompilationSettings(): string;
        discoverTypings(discoverTypingsJson: string): string;
    }
    class LanguageServiceShimHostAdapter implements LanguageServiceHost {
        private shimHost;
        private files;
        private loggingEnabled;
        private tracingEnabled;
        resolveModuleNames: (moduleName: string[], containingFile: string) => ResolvedModuleFull[];
        resolveTypeReferenceDirectives: (typeDirectiveNames: string[], containingFile: string) => ResolvedTypeReferenceDirective[];
        directoryExists: (directoryName: string) => boolean;
        constructor(shimHost: LanguageServiceShimHost);
        log(s: string): void;
        trace(s: string): void;
        error(s: string): void;
        getProjectVersion(): string;
        getTypeRootsVersion(): number;
        useCaseSensitiveFileNames(): boolean;
        getCompilationSettings(): CompilerOptions;
        getScriptFileNames(): string[];
        getScriptSnapshot(fileName: string): IScriptSnapshot;
        getScriptKind(fileName: string): ScriptKind;
        getScriptVersion(fileName: string): string;
        getLocalizedDiagnosticMessages(): any;
        getCancellationToken(): HostCancellationToken;
        getCurrentDirectory(): string;
        getDirectories(path: string): string[];
        getDefaultLibFileName(options: CompilerOptions): string;
        readDirectory(path: string, extensions?: string[], exclude?: string[], include?: string[], depth?: number): string[];
        readFile(path: string, encoding?: string): string;
        fileExists(path: string): boolean;
    }
    class CoreServicesShimHostAdapter implements ParseConfigHost, ModuleResolutionHost {
        private shimHost;
        directoryExists: (directoryName: string) => boolean;
        realpath: (path: string) => string;
        useCaseSensitiveFileNames: boolean;
        constructor(shimHost: CoreServicesShimHost);
        readDirectory(rootDir: string, extensions: string[], exclude: string[], include: string[], depth?: number): string[];
        fileExists(fileName: string): boolean;
        readFile(fileName: string): string;
        private readDirectoryFallback(rootDir, extension, exclude);
        getDirectories(path: string): string[];
    }
    function realizeDiagnostics(diagnostics: Diagnostic[], newLine: string): {
        message: string;
        start: number;
        length: number;
        category: string;
        code: number;
    }[];
    class TypeScriptServicesFactory implements ShimFactory {
        private _shims;
        private documentRegistry;
        getServicesVersion(): string;
        createLanguageServiceShim(host: LanguageServiceShimHost): LanguageServiceShim;
        createClassifierShim(logger: Logger): ClassifierShim;
        createCoreServicesShim(host: CoreServicesShimHost): CoreServicesShim;
        close(): void;
        registerShim(shim: Shim): void;
        unregisterShim(shim: Shim): void;
    }
}
declare namespace TypeScript.Services {
    const TypeScriptServicesFactory: typeof ts.TypeScriptServicesFactory;
}
declare const toolsVersion = "2.2";
